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
    changeBold,
    
}

var gMails = [
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: true, sentAt: 1551133930534, sender: 'Sharon Bril', subject: 'about the project',
     body: `Hey, I would be happy to
see your projects` },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Shani Amos',mail: 'Shaniamos@Gmail.com', to: 'me',  subject: 'Hey Bar', body: `See you tonight` },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Dror Mendel',mail: 'Drorme@Gmail.com',to: 'me', subject: 'Hello my son', body: 'When are you come home to visist us?' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Yahav',mail: 'Yahavmend@Gmail.com',to: 'me', subject: 'Payment', body: 'I saw your transfer in my account' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Amazon.com',mail: 'Amazon@Gmail.com',to: 'me', subject: 'Arriving soon!', body: 'Your delivery is on the way and will contact you tomorrow' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: true, sentAt: 1551133930534, sender: 'Yahuuuu',mail: 'Yahuuuu@Yahuu.com',to: 'me', subject: 'Faild password', body: 'Please try again later to enter the website' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Google Font',mail: 'GoogleFont@Gmail.com',to: 'me', subject: 'You picked very nice fonts', body: 'Use it well' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: true, sentAt: 1551133930534, sender: 'Walla Shops',mail: 'WallaShops@walla.com',to: 'me', subject: 'Box id: 32RG45#', body: 'We got your order' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: true, sentAt: 1551133930534, sender: 'Coding Academy',mail: 'CodingAcademy@code.com',to: 'me', subject: 'Sprint 3 review', body: 'You and Shani did very good work and this sprint!' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Afeka College',mail: 'Afeka@s.afeka.ac.il',to: 'me', subject: 'Schedules', body: 'We happy for you to start the third year and computer science' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Amdocs',mail: 'Amdocs.@Gmail.com', subject: 'Interview',to: 'me', body: 'You will have interview next week' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Fireblocks',mail: 'Fireblocks.com', subject: 'Mail review',to: 'me', body: 'We happy to tell you that you have been accepted into our company!!' },
    { id: utilService.makeId(), type: 'sent', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Bar Mendel', mail: 'Bar1.mendel@gmail.com',to: 'CodingAcademy',subject: 'Mail review', body: 'We happy to tell you that you have been accepted into our company!!' },
    { id: utilService.makeId(), type: 'draft', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Yahav Mendel',mail: 'Yahavmend@Gmail.com', to: 'me',subject: 'מה קורה יהב?', body: 'Are you going to parents this weekend?' },
    { id: utilService.makeId(), type: 'draft', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Afeka',mail: 'Afeka@s.afeka.ac.il', to: 'me',subject: 'About the summer course', body: 'I woukd like to know how is goinh with the summer course, if the finnal test is difficult?' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Walla Shops',mail: 'WallaShops@walla.com',to: 'me', subject: 'Box id: 24DGDD5#', body: 'You will get the box today from the delivery guy' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Applied Matirials',mail: 'AppliedMatirials.com', to: 'me',subject: 'Do you want to here more?', body: 'If you intersted in our jobs, just send us a message' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Yahav Mendel',mail: 'Yahavmend@Gmail.com',to: 'me', subject: 'About this weekend', body: 'yes i will come this weekend, see you!' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Amir Arama', mail: 'AmirArama@Gmail.com',to: 'me',subject: 'React project', body: 'I have work for you in react if you wanna to do it...' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'PayBox',mail: 'PayBox@Gmail.com', to: 'me',subject: 'A request for a personal string pull has been received', body: 'Hi Bar Mendel, we received your request to withdraw from the personal balance in the application an amount of 2000 ILS' },
    { id: utilService.makeId(), type: 'arrived', isRead: false, isStarred: false, sentAt: 1551133930534, sender: 'Avocode',mail: 'Avocode@Gmail.com',to: 'me', subject: 'Verify your e-mail to finish signing up for Avocode', body: 'Thank you for choosing Avocode.' },
    { id: utilService.makeId(), type: 'arrived', isRead: true, isStarred: false, sentAt: 1551133930534, sender: 'Udemy',mail: 'Udemi@Gmail.com',to: 'me', subject: 'Social Authentication Added', body: 'Hi Bar,We take your account security seriously and wanted to update you on a change to your account. A Facebook login was just added to your existing Udemy account.' },

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
        mail: 'Bar1.mendel@gmail.com',
        to: `${newMail.to}@gmail.com`,
        sentAt: new Date(),
        sender: 'Bar Mendel', 
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
        sender: 'Bar Mendel',
        mail: 'Bar1.mendel@gmail.com', 
        to: `${mail.to}@gmail.com`,
        isStarred: false,
        type: 'draft',
    }
    
    let eMails = _loadFromStorage()
    eMails.unshift(draftMail)
    _saveToStorage(eMails)
    return Promise.resolve()

}

function changeBold(mailId){
    let eMails = _loadFromStorage()
    const mail = eMails.find(mail => mail.id === mailId)
    mail.isRead = true
    _saveToStorage(eMails)
    return Promise.resolve()

}

function getNoteAndCompose(){

}

function _saveToStorage(eMails) {
    storageService.saveToStorage(KEY, eMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}

