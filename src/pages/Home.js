function Home() {
    return (
        <div className="p-5 mb-4 jumbotron-bg">
            <div className="container-fluid py-5 text-white">
                <h1 className="display-5 fw-bold jumbotron-header">HERO SECTION</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron,
                    <br/> just like the one in previous versions of Bootstrap.
                    <br /> Click the button below to check out some of the examples
                </p>
                <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" className="btn btn-primary btn-lg" type="button" target="_blank">Go to Bootstrap</a>
            </div>
        </div>

    )
}

export default Home;