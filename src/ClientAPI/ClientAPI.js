import ErrorAPI from "./ErrorAPI";

class ClientAPI {
    static baseUrl = "https://api.github.com";
    onErrorDelegate = null;

    async sendMessage(method, url) {
        const response = await fetch(ClientAPI.baseUrl + url, {
            method: method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/vnd.github.v3+json",
            },
            timeout: 30000,
        })
            .then(await this.handleError)
            .then((response) => response.json())
            .catch((error) => this.onError(error));

        return response ?? null;
    }

    async handleError(response) {
        if (!response.ok) {
            const error = new ErrorAPI(
                response.status,
                response.statusText,
                (await response.json()).message
            );

            throw error;
        }

        return response;
    }

    onError(error) {
        console.log(error);
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

const getUserInfoAndRepos = async (userName) => {
    const clientAPI = new ClientAPI();
    const userInfo = await clientAPI.getUserInfo(userName);

    if (userInfo && userInfo.public_repos >= 0) {
        let countOfRepos = userInfo.public_repos;

        if (countOfRepos > 0) {
            const tab = [];

            for (let page = 1; countOfRepos > 0; page++) {
                tab.push(clientAPI.getUserReposPage(userName, page));
                countOfRepos -= 100;
            }

            return { owner: userInfo, repos: (await Promise.all(tab)).flat() };
        }

        return { owner: userInfo, repos: [] };
    }

    return null;
};

export { ClientAPI, getUserInfoAndRepos };
