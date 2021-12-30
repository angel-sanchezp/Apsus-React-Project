const { Link } = ReactRouterDOM

export class MailSideNav extends React.Component {
  state = {
    filterBy: {
      status: "inbox",
      isRead: false,
      txt: "",
    },
  }



  setFilter = (value) => {
    this.setState(
      { filterBy: { ...this.state.filterBy, status: value } },
      () => {
        this.props.getCurrStatus(this.state.filterBy.status)

      }
    )
  }




  render() {
    const { status } = this.state.filterBy

    return (
      <div className={`mail-side-nav ${"active-side-nav"}`}>
        <div className="compose-container">
          <Link to="/mail/newMail">
            <div className="side-nav-compose">
              <div className="side-nav-icon">
                <img src="./img/icons/new-mail-icon.png" />
              </div>
              Compose
            </div>
          </Link>
        </div>
        <div
          value="inbox"
          onClick={() => {
            this.setFilter("inbox")
          }}
          className={`${status === "inbox" ? "active" : ""
            } side-nav side-nav-inbox`}>
          Inbox
        </div>
        <div
          value="sent"
          onClick={() => {
            this.setFilter("sent")
          }}
          className={`${status === "sent" ? "active" : ""} side-nav`}>
          Sent
        </div>
        <div
          value="trash"
          onClick={() => {
            this.setFilter("trash")
          }}
          className={`${status === "trash" ? "active" : ""} side-nav`}>
          Trash
        </div>
        <div
          value="draft"
          onClick={() => {
            this.setFilter("draft")
          }}
          className={`${status === "draft" ? "active" : ""} side-nav`}>
          Draft
        </div>
      </div>
    )
  }
}