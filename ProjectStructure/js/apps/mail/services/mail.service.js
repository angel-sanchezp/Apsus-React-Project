
import { storageService } from "../../../services/storage.service.js"
import { utilService } from "../../../services/util.service.js"




export const mailService = {
    query,
    getAllUnreadMails,
    onReadMail,
    getMailById,
    deleteMail,
    sendMail,
    sortBy,
    draftMail,
    updateMail
}

var gMails = [
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
        date: "Jun 25",
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
        date: "May 25",
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
        date: "Oct 25",
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
        date: "Apr 05",
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
        date: "Jul 25",
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
        date: "Nov 25",
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
        status: "trash",
        date: "Sep 25",
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
        date: "Dec 25",
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
        date: "Mar 25",
    },
]

const KEY = 'mailsDB';

function sortBy(sortBy) {
    const mails = _loadMailsFromStorage();

    if (sortBy == 'date') {
        console.log(sortBy)
        mails.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
        return Promise.resolve(mails)
    } else if (sortBy === 'from') {
        console.log(sortBy)
        mails.sort(function (a, b) {
            var fromA = a.from.toUpperCase(); // ignore upper and lowercase
            var fromB = b.from.toUpperCase(); // ignore upper and lowercase
            if (fromA < fromB) {
                return -1;
            }
            if (fromA > fromB) {
                return 1;
            }
            // names must be equal
            return 0;
        });
        return Promise.resolve(mails)
    }


}

function draftMail(mail){
    sendMail(mail,true);
    return Promise.resolve();

}

function query(filterBy = null) {
    const mails = _loadMailsFromStorage();
    if (!mails || !mails.length) {
        _createMails();
    }
    if (!filterBy) return Promise.resolve(mails)
    const filteredMails = _getFilteredMails(mails, filterBy)
    return Promise.resolve(filteredMails)

}

function _getFilteredMails(mails, filterBy) {
    // console.log(filterBy)
    if (filterBy.txt) {
        let { txt } = filterBy
        txt.toUpperCase()
        const txtFilteredMails = mails.filter((mail) => {
            return mail.subject.toLowerCase().includes(txt) || mail.body.toLowerCase().includes(txt) || mail.from.toLowerCase().includes(txt)
        })
        return Promise.resolve(txtFilteredMails)
    }

    let mailsToShow
    switch (filterBy.status) {
        case "inbox":
            mailsToShow = mails.filter((mail) => {
                return mail.status === "inbox"
            })
            return Promise.resolve(mailsToShow)

        case "unRead":
            mailsToShow = mails.filter((mail) => {
                return !mail.isRead
            })
            return Promise.resolve(mailsToShow)

        case "sent":
            mailsToShow = mails.filter((mail) => {
                return mail.status === "sent"
            })
            return Promise.resolve(mailsToShow)
        case "trash":
            mailsToShow = mails.filter((mail) => {
                return mail.status === "trash"
            })
            return Promise.resolve(mailsToShow)
        case "read":
            mailsToShow = mails.filter((mail) => {
                return mail.isRead
            })
            return Promise.resolve(mailsToShow)
        case "draft":
            mailsToShow = mails.filter((mail) => {
                return mail.status === "draft"
            })
            return Promise.resolve(mailsToShow)
        case "favorite":
            mailsToShow = mails.filter((mail) => {
                return mail.isStarred
            })
            // console.log(mailsToShow);
            return Promise.resolve(mailsToShow)
    }
}

function getMailById(mailId) {
    const mails = _loadMailsFromStorage();
    const mail = mails.find(function (mail) {
        return mail.id === mailId
    })
    return Promise.resolve(mail)
}


function _createMails() {
    var mails = _loadMailsFromStorage();
    if (!mails || !mails.length) {
        mails = gMails;
    }
    _saveMailsToStorage(mails);
}

function deleteMail(mailId) {
    const mails = _loadMailsFromStorage();
    const mailIdx = mails.findIndex(function (mail) {
        return mailId === mail.id
    })
    if(mails[mailIdx].status!=="trash") {
        mails[mailIdx].status = "trash";
    } 
    else{
        mails.splice(mailIdx,1);
    }

    _saveMailsToStorage(mails);
    return Promise.resolve()
}

function onReadMail(mailId) {
    const mails = _loadMailsFromStorage();
    const mailIdx = mails.findIndex(function (mail) {
        return mailId === mail.id
    })
    mails[mailIdx].isRead = true
    _saveMailsToStorage(mails);
    return Promise.resolve()
}

function sendMail(mail, isDrafted=false) {
    // console.log(mail)
    const mails = _loadMailsFromStorage();
    const newMail = {
        id: utilService.makeId(),
        from: "You",
        subject: mail.subject,
        body: mail.body,
        isRead: true,
        sentAt: Date.now(),
        to: mail.to,
        status: `${isDrafted ? 'draft' : 'sent'}`,
    }
    mails.unshift(newMail)
    _saveMailsToStorage(mails);
    return Promise.resolve()
}

function updateMail(mailId, star) {
    const mails = _loadMailsFromStorage();
    const mail = mails.find(mail => mail.id === mailId)
    const value = (mail[star] === 'true') ? 'false' : 'true'
    mail[star] = value
    _saveMailsToStorage(mails)
    return Promise.resolve(mail)
}



function getAllUnreadMails() {
    const mails = _loadMailsFromStorage();
    const unReadMails = mails.filter((mail) => {
        return !mail.isRead
    })
    return Promise.resolve(unReadMails.length)
}


function _saveMailsToStorage(mails) {
    storageService.saveToStorage(KEY, mails)
}

function _loadMailsFromStorage() {
    return storageService.loadFromStorage(KEY)
}