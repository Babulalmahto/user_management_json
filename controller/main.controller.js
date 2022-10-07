const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../database/data.json");

class MainController {
    // create read update delete
    getUser(req, res) {
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) return res.status(400).json({
                status: 400,
                message: "something went wrong"
            });
            res.status(200).json({
                status: 200,
                message: "Data fetch successfully",
                data: JSON.parse(data)
            });
        })
    }

    createUser(req, res) {
        const { username, name, age } = req.body;
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) return res.status(400).json({
                status: 400,
                message: "something went wrong"
            });

            let userData = JSON.parse(data);
            
            const ifUsernamePresent = userData.find(elem => elem.username === username);
            if (ifUsernamePresent) return res.status(409).json({
                status: 409,
                message: "Username already present."
            });
            userData.push({ name, age, username });
            userData = JSON.stringify(userData);
            fs.writeFile(filePath, userData, (err, data) => {
                if (err) return res.status(400).json({
                    status: 400,
                    message: "something went wrong"
                });
                console.log(data)
                res.status(200).json({
                    status: 200,
                    message: "User created successfully"
                });
            });
        })
    }
}

module.exports = new MainController;