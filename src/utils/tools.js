import request from "superagent";


export default {


    get(url, data, callback) {
        if (data) {
            request
                .get(url)
                .query(data)
                .set("Content-Type", "application/json;charset=UTF-8")
                .end((err, res) => {
                    if (res.statusCode === 200) { 
                        
                        callback(res.body);
                    } else {
                        callback({
                            message: "server error"
                        });
                    }
                });
        } else {
            request
                .get(url)
                .set("Content-Type", "application/json;charset=UTF-8")
                .end((err, res) => {
                    if (res && res.statusCode === 200) {
                        console.log("200"); 
                        callback(res.body);
                    } else {
                        callback({
                            message: "网络出错了！"
                        });
                    }
                });
        }
    },
    get2(url, data, header, callback) {
        if (data) {
            request
                .get(url)
                .query(data)
                .set(header)
                .end((err, res) => {
                    if (res.statusCode === 200) {
                        callback(res.body);
                    } else {
                        callback({
                            message: "server error"
                        });
                    }
                });
        } else {
            request
                .get(url)
                .set(header)
                .end((err, res) => {
                    if (res && res.statusCode === 200) {
                        callback(res.body);
                    } else {
                        callback({
                            message: "网络出错了！"
                        });
                    }
                });
        }
    },

    post(url, data, callback) {
        if (data) {
            request
                .post(url)
                .send(data)
                .set("Content-Type", "application/json;charset=UTF-8")
                .end((err, res) => {
                    if (res && res.statusCode === 200) {
                        callback(res.body);
                    } else {
                        callback({
                            message: "网络出错了！"
                        });
                    }
                });
        } else {
            request
                .post(url)
                .set("Content-Type", "application/json;charset=UTF-8")
                .end((err, res) => {
                    if (res.statusCode === 200) {
                        callback(res.body);
                    } else {
                        callback({
                            message: "server error"
                        });
                    }
                });
        }
    },

    post2(url, data, header, callback) {
        if (data) {
            request
                .post(url)
                .send(data)
                .set(header)
                .end((err, res) => {
                    if (res && res.statusCode === 200) {
                        callback(res.body);
                    } else {
                        callback({
                            message: "网络出错了！"
                        });
                    }
                });
        } else {
            request
                .post(url)
                .set(header)
                .end((err, res) => {
                    if (res.statusCode === 200) {
                        callback(res.body);
                    } else {
                        callback({
                            message: "server error"
                        });
                    }
                });
        }
    },

    postfile(url, file, filename, callback) {
        console.log("传入的的file", file);
        let data = new FormData();
        data.append("file", file, filename);

        request
            .post(url)
            .send(data)
            .end((err, res) => {
                if (res && res.statusCode === 200) {
                    callback(res.body);
                } else {
                    callback({
                        message: "网络出错了！"
                    });
                }
            });

    },
};
