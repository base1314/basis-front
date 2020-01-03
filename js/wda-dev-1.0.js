Wda = {
    Ajax: {
        doPost: function (url, param, success, fail) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        success(xhr.responseText)
                    } else {
                        fail(xhr.status);
                    }
                }
            };
            var str = "";
            for (var item in param) {
                str += item + "=" + param[item] + "&";
            }
            str = str.substring(0, str.length - 1);
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.send(str);
        },
        doGet: function (url, param, success, fail) {
            var xhr = new XMLHttpRequest();
            if (typeof param === "object") {
                var str = '?';
                for (var item in param) {
                    str += item + "=" + param[item] + "&";
                }
                str = str.substring(0, str.length - 1);
                xhr.open("GET", url + str, true);
            } else if (typeof param === "function") {
                success = param;
                fail = success;
                xhr.open("GET", url, true);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        success(xhr.responseText)
                    } else {
                        fail(xhr.status);
                    }
                }
            };
            xhr.send(null);
        }
    }
};