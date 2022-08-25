import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const KEY = 'EmailsDB'



export const mailService = {
    query,
    deleteMail,
    getMailById,
    changeStarColor,
}

var gMails = [
    { id: utilService.makeId(), subject: 'Miss you!',body: 'Would love to catch up sometimes', isRead: false, sentAt: 1551133930594, to: 'momo@momo.com', sender: 'Shani', isStarred: false, type: 'arrived' },
    { id: utilService.makeId(), subject: 'Hey you', body: 'lets go there!', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Bar', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'Are you ready?', body: 'i think is ok', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Ori', isStarred: true, type: 'arrived' },
    { id: utilService.makeId(), subject: 'I gonna go', body: 'i heard about that and you would love it', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'its me again', body: 'i will be there at 20:00 oclock', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'lets play', body: 'i love this game', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'hello', body: 'no body', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'yes we are good', body: 'we did it perfect', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'yes, we can', body: 'That what Obama said', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: true, type: 'sent' },
    { id: utilService.makeId(), subject: 'see you tonight', body: 'we will meet in tel aviv', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'Are you ready?', body: 'i think is ok', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Ori', isStarred: true, type: 'arrived' },
    { id: utilService.makeId(), subject: 'hello', body: 'no body', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'hello im here', body: 'haaloooo', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: false, type: 'sent' },
    { id: utilService.makeId(), subject: 'Are you ready?', body: 'they are very good', isRead: false, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Ori', isStarred: true, type: 'arrived' },
    { id: utilService.makeId(), subject: 'about the project', body: 'hey i would be happy', isRead: true, sentAt: 1551133930534, to: 'momo@momo.com', sender: 'Sharon', isStarred: true, type: 'sent' },
]

function query() {
    let eMails = _loadFromStorage()
    if (!eMails || eMails.length === 0) {
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

function getMailById(mailId) {
    if(!mailId) return Promise.resolve(null)
    let eMails = _loadFromStorage()
    const mail = eMails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}

function changeStarColor(mailId){
    if(!mailId) return Promise.resolve(null)
    let eMails = _loadFromStorage()
    const mailIdex = eMails.findIndex(mail => mail.id === mailId)
    console.log(mailIdex);
    eMails[mailIdex].isStarred = !eMails[mailIdex].isStarred
    console.log(eMails[mailIdex].isStarred);
}

function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

