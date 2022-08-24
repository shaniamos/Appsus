import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const KEY = 'EmailsDB'
var eMails


export const mailService = {
    query,
    deleteMail,


}

var gMails = [
    { id: utilService.makeId(), subject: 'Miss you!',body: 'Would love to catch up sometimes', isRead: false, sentAt: 1551133930594, to: 'momo@momo.com', sendFrom: 'Shani' },
    { id: utilService.makeId(), subject: 'Hey you', body: 'lets go there!', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com', sendFrom: 'Bar' },
    { id: utilService.makeId(), subject: 'Hey you', body: 'lets go there!', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com', sendFrom: 'Ori' },
    { id: utilService.makeId(), subject: 'Hey you', body: 'lets go there!', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com', sendFrom: 'Sharon' },
]

function query() {


    eMails = _loadFromStorage()
    if (eMails.length === 0) {
        eMails = gMails
        _saveToStorage(eMails)
    }
    return Promise.resolve(eMails)
}



function deleteMail(mailId){
    let eMails = _loadFromStorage()
    const mailIndex = eMails.findIndex(mail => mail.id === mailId)
    // console.log(reviewIndex);
    eMails.splice(mailIndex,1)
    _saveToStorage(eMails)
    return Promise.resolve()
}
















function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

