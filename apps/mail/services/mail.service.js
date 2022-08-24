import { storageService } from '../../../services/storage.service.js'

const KEY = 'EmailsDB'
var eMails


export const mailService = {
    query,


}

var gMails = [
    { id: 'e101', subject: 'Miss you!', body: 'Would love to catch up sometimes', isRead: false, sentAt: 1551133930594, to: 'momo@momo.com' },
    { id: 'e102', subject: 'Hey you', body: 'lets go there!', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com' },
]

function query() {


    eMails = _loadFromStorage()
    if (eMails.length === 0) {
        eMails = gMails
        _saveToStorage(eMails)
    }
    return Promise.resolve(eMails)
}




















function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

