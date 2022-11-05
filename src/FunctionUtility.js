export const sortByKey = (data, key) => {
    if(data === undefined) return
    let sortedData

    sortedData = data.sort((a,b) => {
        let x = a[key]
        let y = b[key]

        if(x > y){ return 1 }
        if(x < y){ return -1 }

        return 0
    })

    return sortedData
}

export const sortArray = (data) => {
    if(data === undefined) return
    let sortedData

    sortedData = data.sort((a,b) => {
        return a.age - b.age
    })

    return sortedData
}

export const modifyUrl = (url) => {
    let subUrl = url.substring(0, url.indexOf('view?'))
    subUrl += "preview"

    return subUrl
}

export const sortObject = (obj) => {
    return Object.keys(obj).sort().reduce(function (result, key) {
        result[key] = obj[key];
        return result;
    }, {});
}