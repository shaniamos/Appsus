import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

const KEY = 'EmailsDB'



export const mailService = {
    query,
    deleteMail,
    getMailById,
    changeStarColor,
    sendMail,
    moveToDraftMails,
}

var gMails = [
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Sharon Bril', subject: 'about the project', body: 'Hey i would be happy to see your projects' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'ShanAmos@gmail.com', subject: 'Hey Bar', body: 'See you tonight' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Dror Mendel', subject: 'Hello my son', body: 'When are you come home to visist us?' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Yahav', subject: 'Payment', body: 'I saw your transfer in my account' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Amazon.com', subject: 'Arriving soon!', body: 'Your delivery is on the way and will contact you tomorrow' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: true, sentAt: 1551133930534, sender: 'Yahuuuu', subject: 'Faild password', body: 'Please try again later to enter the website' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Google Font', subject: 'You picked very nice fonts', body: 'Use it well' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: true, sentAt: 1551133930534, sender: 'Walla Shops', subject: 'Box id: 32RG45#', body: 'We got your order' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Coding Academy', subject: 'Sprint 3 review', body: 'You and Shani did very good work and this sprint!' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Afeka College', subject: 'Schedules', body: 'We happy for you to start the third year and computer science' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Amdocs.com', subject: 'Interview', body: 'You will have interview next week' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Fireblocks', subject: 'Mail review', body: 'We happy to tell you that you have been accepted into our company!!' },
    { id: utilService.makeId(), type: 'sent', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'CodingAcademy@code.com', subject: 'Mail review', body: 'We happy to tell you that you have been accepted into our company!!' },
    { id: utilService.makeId(), type: 'draft', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Yahav Mendel', subject: 'מה קורה יהב?', body: 'Are you going to parents this weekend?' },
    { id: utilService.makeId(), type: 'draft', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Afeka@s.afeka.ac.il', subject: 'About the summer course', body: 'I woukd like to know how is goinh with the summer course, if the finnal test is difficult?' },
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
    eMails[mailIdex].isStarred = !eMails[mailIdex].isStarred
    _saveToStorage(eMails)
    return Promise.resolve()
}

function sendMail(newMail){
    console.log('newMail', newMail);
    const mailSent = {
        id: utilService.makeId(),
        subject: newMail.subject,
        body: newMail.body,
        isRead: true,
        sentAt: new Date(),
        sender: newMail.to,
        isStarred: false,
        type: 'sent',
    }

    let eMails = _loadFromStorage()
    eMails.unshift(mailSent)
    _saveToStorage(eMails)
    return Promise.resolve()
}

function moveToDraftMails(mail){
    
    const draftMail = {
        id: utilService.makeId(),
        subject: mail.subject,
        body: mail.body,
        isRead: true,
        sentAt: new Date(),
        sender: mail.to,
        isStarred: false,
        type: 'draft',
    }
    
    let eMails = _loadFromStorage()
    eMails.unshift(draftMail)
    _saveToStorage(eMails)
    return Promise.resolve()

}

function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

