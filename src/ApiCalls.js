
export default Object.create(null, {
    getUserData: {
        value: () => {
            return fetch("http://localhost:8088/users")
                .then(res => res.json())

        }
    },
    ///Get all values from API
    getAllData: {
        value: () => {
            return fetch("http://localhost:8088")
                .then(r => r.json())

        }
    },


    ///Get all chat from API
    getAllChat: {
        value: () => {
            return fetch("http://localhost:8088/messages?_order=desc&_sort=date")
                .then(r => r.json())
        }
        },
        ///Get all news from Api
        getAllNews: {
            value: () => {
                return fetch("http://localhost:8088/news")
                    .then(r => r.json())
            }
        },
        ///Get all evenets from API
        getAllEvents: {
            value: () => {
                return fetch("http://localhost:8088/events?_order=desc&_sort=date")
                    .then(r => r.json())
            },
            ////save User Data to API
            saveUserInfo: {
                value: (data) => {
                    return fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                        .then(response => response.json())
                },

                ////Save Chat Messages to APi
                saveChatInfo: {
                    value: (data) => {
                        return fetch("http://localhost:8088/messages", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })
                            .then(response => response.json())
                    },
                    ////Save events to API
                    saveEvents: {
                        value: (data) => {
                            return fetch("http://localhost:8088/users", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(data)
                            })
                                .then(response => response.json())
                        },

                        ///Save Tasks to Api
                        saveTasks: {
                            value: (data) => {
                                return fetch("http://localhost:8088/users", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(data)
                                })
                                    .then(response => response.json())
                            },


                        }
                    }
                }
            }
        }

    }
)

console.log("howdy")