import axios from 'axios'

export const isJSONobj = (param) => {
    try {
        return JSON.parse(param)
    } catch (err) {
        console.log(err)
        return null
    }
}

export const validChar = (wordName) => {
    if (!wordName || typeof wordName !== 'string') return false
    return !!(wordName !== '' && wordName.trim() !== '')
}

export const validArrayChar = (wordArrays) => {
    if (!wordArrays || !wordArrays.length) return false
    return !(wordArrays.filter((cv) => validChar(cv) === false).length > 0)
}

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const doingAll = async (url, action, obj) => {
    if (!url || !action) return null
    const handleAction = axios[action]
    if (!handleAction) return null
    try {
        const response = await handleAction(url, obj)
        // axios.post(url, obj)
        // axios.put(url com id, obj)
        // axios.delete(url com id)
        return response.data
    } catch (er) {
        return er.response
    }
}

export const getURLParameters = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const object = []
    for (const pair of urlParams.entries()) {
        object.push([pair[0], pair[1]])
    }
    return Object.fromEntries(object)
}

export const tobottom = () => window.scrollTo({
        top: document.getElementById('footer') ? document.getElementById('footer').offsetTop : 20000,
        left: 0,
        behavior: 'smooth',
    })

export const totop = () => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })

export const readyimg = (myimg, callback) => {
    if (!myimg || !callback) return null
    const reader = new FileReader()
    reader.addEventListener('load', () => {
        const finalImage = reader.result
        return callback(finalImage)
    })
    return reader.readAsDataURL(myimg)
}

export const handleAll = (ev, callback) => {
    if (!ev || !callback) return null
    const {
        type, value, id, name, checked,
    } = ev.target
    const key = type === 'radio' ? name : id
    let finalValue = value
    if (type === 'checkbox') finalValue = checked
    if (type === 'radio') finalValue = id
    return callback({
        [key]: finalValue,
    })
}
