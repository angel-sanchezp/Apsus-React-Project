
import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"




export const mailService={
    query,
}



const KEY = "mailsDB";

const gEmails = [
    {
        id: utilService.makeId(),
        from: "stas",
        subject: "Auto reply!",
        body: `Thank you for your email! . I will allow each sender one email. If you send me multiple emails, I will randomly delete your emails until it is pared down to one. Alternatively, you may contact Raz , who does not have a one-email policy for their inbox. 
        Please note that you already sent me one email.
        
        Sincerely, 
        
       stas`,
        isRead: false,
        sentAt: 155114120594,
        to: "angel@gmailcom",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "Hello!",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "daniel",
        isStarred: false,
        status: "sent",
    },
    {
        id: utilService.makeId(),
        from: "bella",
        subject: "hiring?",
        body: `hello we are hiring to full stack develepor if are you interest please write me .`,
        isRead: false,
        sentAt: 1551133930594,
        to: "dana@mail.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "melissa",
        subject: "Did you hear the news?!",
        body: `Hi Shon
        I hope you’re having a wonderful day!
        I am emailing you today to let you know we have opened doors to our iOS app development team.
        If you have any questions about the position, please respond to this email or use the live chat on the product page. Our staff is waiting to respond to you.
        Make sure you try it before contacting us.
        
        Thank you,
        
        melissa`,
        isRead: true,
        sentAt: 1551133930594,
        to: "dana@mail.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "Yuval",
        subject: "Check it out",
        body: `Hi angel,
        i dont see you a lot of time and i want to come to visit you please
        leat me know if its ok for you i will be in town at february
        
        
        miss you!
        
        Dad`,
        isRead: false,
        sentAt: 1551133930594,
        to: "dana@mail.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "Farfetch",
        subject: "Your Order has been shipped",
        body: utilService.makeLorem(),
        isRead: false,
        sentAt: 1551133930594,
        to: "dana@mail.com",
        isStarred: false,
        status: "inbox",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "Please hire me!",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "dana@mail.com",
        isStarred: false,
        status: "sent",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "I want free sleep",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "bank@leumi.co.il",
        isStarred: false,
        status: "sent",
    },
    {
        id: utilService.makeId(),
        from: "You",
        subject: "Let's play",
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: "dana@mail.com",
        isStarred: false,
        status: "sent",
    },
]

_createMails();

function query(){
    const mails=_loadMailsFromStorage();
    return Promise.resolve(mails);
}


function _createMails(){
    var mails=_loadMailsFromStorage();
    if(!mails || !mails.length){
        mails=gEmails;
    }

    _saveMailsToStorage(mails);

}

function _saveMailsToStorage(books) {
    storageService.saveToStorage(KEY, books)
  }
  
  function _loadMailsFromStorage() {
    return storageService.loadFromStorage(KEY)
  }