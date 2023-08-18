export function TwitterFollowCard () {
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img className="tw-followCard-avatar" src="/public/avatar.jpg" alt="Avatar de abrahan" />
            <div className="tw-followCard-info">
                <strong>Abrahan Frias</strong>
                <span className="tw-followCard-infoUserName">@abrahanfrias</span>
            </div>
        </header>

        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}
