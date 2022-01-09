import ErrorAPI from "./ErrorAPI";

class ClientAPI {
    static baseUrl = "https://api.github.com";
    onErrorDelegate = null;

    async sendMessage(method, url) {
        let response = null;

        try {
            response = await fetch(ClientAPI.baseUrl + url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/vnd.github.v3+json",
                },
                timeout: 30000,
            });

            if (!response.ok) {
                const errorObject = await response.json();
                const error = new ErrorAPI(
                    response.status,
                    errorObject.message,
                    errorObject
                );

                response = null;
                this.onError(error);
            } else {
                response = await response.json();
            }
        } catch (err) {
            response = null;
            const error = new ErrorAPI(500, err.message, err);
            this.onError(error);
        }

        return response ?? null;
    }

    onError(error) {
        //console.log(error);
        if (this.onErrorDelegate) this.onErrorDelegate(error);
    }

    getUserReposPage(userName, page = 1) {
        return this.sendMessage(
            "GET",
            "/users/" + userName + "/repos?per_page=100&page=" + page
        );
    }

    getUserInfo(userName) {
        return this.sendMessage("GET", "/users/" + userName);
    }
}

const getUserInfoAndRepos = async (userName, errorCallback = null) => {
    const clientAPI = new ClientAPI();
    clientAPI.onErrorDelegate = errorCallback;
    const userInfo = await clientAPI.getUserInfo(userName);

    if (userInfo && userInfo.public_repos >= 0) {
        let countOfRepos = userInfo.public_repos;

        if (countOfRepos > 0) {
            const requests = [];

            for (let page = 1; countOfRepos > 0; page++) {
                requests.push(clientAPI.getUserReposPage(userName, page));
                countOfRepos -= 100;
            }

            const repos = (await Promise.all(requests)).flat();

            if (repos.includes(null)) {
                return null;
            }

            return {
                owner: userInfo,
                repos: repos,
            };
        }

        return { owner: userInfo, repos: [] };
    }

    return null;
};

export { ClientAPI, getUserInfoAndRepos };
