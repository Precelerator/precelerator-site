export default function Contact() {
    return (
        <>
            <div id="contact" className="form-2">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h2>Kontakt</h2>
                        <ul className="list-unstyled li-space-lg">
                        <li className="address">Tritt über das formular mit uns in Kontakt oder kontaktiere uns per E-Mail!</li>
                        <li><i className="fas fa-map-marker-alt"></i>Lothstraße 21, 80797 München</li>
                        <li>
                            <i className="fas fa-envelope"></i
                            ><a className="turquoise" href="mailto:precelerator@sce.de">precelerator@sce.de</a>
                        </li>
                        </ul>
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                    <div className="row">
                    <div className="col-lg-6">
                        <div className="map-responsive">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.6100343684916!2d11.554746115835144!3d48.15632290783392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75e004131e7f%3A0xefaa5f79a9b82a15!2sLothstra%C3%9Fe%2021%2C%2080797%20M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1601635484733!5m2!1sde!2sde"
                            width="600"
                            height="450"
                            frameBorder="0"
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                        </div>
                    </div>
                    {/* end of col */}
                    <div className="col-lg-6">
                        {/* Contact form */}
                        <form id="contactform" data-toggle="validator" data-focus="false">
                        <div className="form-group">
                            <input type="text" className="form-control-input" id="cname" required />
                            <label className="label-control" htmlFor="cname">Name</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control-input" id="cemail" required />
                            <label className="label-control" htmlFor="cemail">E-Mail</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control-textarea" id="cmessage" required></textarea>
                            <label className="label-control" htmlFor="cmessage">Nachricht</label>
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group checkbox">
                            <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />Ich habe die
                            <a href="privacy-policy.html">Datenschutzerklärung</a> sowie den
                            <a href="disclaimer.html">Haftungsausschluss</a> zur Kenntnis genommen und stimme diesen zu.
                            <div className="help-block with-errors"></div>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="form-control-submit-button">ABSENDEN</button>
                        </div>
                        <div className="form-message">
                            <div id="cmsgSubmit" className="h3 text-center hidden"></div>
                        </div>
                        </form>
                        {/* end of contact form */}
                    </div>
                    {/* end of col */}
                    </div>
                    {/* end of row */}
                </div>
                {/* end of container */}
            </div>
        </>
    ) 
}