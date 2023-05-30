export class DataServices {
    static saveData(key, data) {
        return new Promise((resolve, reject) => {
            let savedData = JSON.parse(localStorage.getItem(key)) || [];
            console.log(savedData)
            if (savedData.find(i => i.name == data.name)) {
                resolve(false)
            } else {
                savedData.push(data);
                localStorage.setItem(key, JSON.stringify(savedData));
                resolve(true)
            }
        })
    }

    static removeData(key, id) {
        return new Promise((resolve, reject) => {
            let savedData = JSON.parse(localStorage.getItem(key)) || [];
            savedData = savedData.filter(item => item.id !== id);
            localStorage.setItem(key, JSON.stringify(savedData));
            resolve(true)
        })
    }

    static getAllData(key) {
        return new Promise((resolve, reject) => {
            let savedData = JSON.parse(localStorage.getItem(key)) || [];
            resolve(savedData);
        });
    }

    static getRandomItemsFromArray(key, num) {
        return new Promise((resolve, reject) => {
            let savedData = JSON.parse(localStorage.getItem(key)) || [];
            const result = [];
            const len = savedData.length;
            const taken = new Set();
            if (num > len) {
                throw new RangeError("getRandomItemsFromArray: more elements taken than available");
            }
            while (result.length < num) {
                const randomIndex = Math.floor(Math.random() * len);
                if (!taken.has(randomIndex)) {
                    taken.add(randomIndex);
                    result.push(savedData[randomIndex]);
                }
            }
            resolve(result);
        })
    }
}

