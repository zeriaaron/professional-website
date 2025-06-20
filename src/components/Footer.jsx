

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <>
            <footer>
                <div>
                    <strong>
                        <p>All Rights Reserved &copy; 2024 - {currentYear}</p>
                    </strong>
                </div>
            </footer>
        </>
    )
}

export default Footer