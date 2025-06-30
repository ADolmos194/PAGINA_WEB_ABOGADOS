import React, { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "@assets/webanterior/logo.svg";
import Espanol from "@assets/webanterior/es.png";
import Ingles from "@assets/webanterior/gb.png";
import foto1 from "@assets/webanterior/foto-nueva-F.jpg";
import foto2 from "@assets/webanterior/Baner_imagen-2_Web.jpg";
import logo_footer from "@assets/webanterior/logo-footer.svg";
import Social from "@assets/webanterior/social.svg";
import derechocorporativo from "@assets/webanterior/derecho-corporativo.jpg";
import derechotributario from "@assets/webanterior/derecho-tributario.jpg";
import derechoinmobiliario from "@assets/webanterior/derecho-inmobiliario.jpg";
import propiedadintelectual from "@assets/webanterior/propiedad-intelectual.jpg";

import Linkedin from "@assets/webanterior/linkedin.svg";
import { useTranslation } from "react-i18next";

export const Inicio = () => {
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const [aceptado, setAceptado] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(null);

    return (
        <>
            <header className={`main-header ${menuOpen ? "menu-open" : ""}`}>
                <div className="wp_center wp_flexbox">
                    <div className="wp_containerLogo">
                        <a href="/">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <div
                        className={`is_icoNav ${menuOpen ? "closeNav" : ""}`}
                        onClick={toggleMenu}
                    >
                        <div>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className="wp_containerNav">
                        <div className="field-nav">
                            <ul id="menu-menu" className="menu">
                                <li>
                                    <a href="/estudio">{t("estudio")}</a>
                                </li>
                                <li>
                                    <a href="/abogados">{t("abogados")}</a>
                                </li>
                                <li>
                                    <a href="/servicio">{t("servicios")}</a>
                                </li>
                                <li>
                                    <a href="/blog">{t("blog")}</a>
                                </li>
                                <li>
                                    <a href="/contacto">{t("contacto")}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="field-lang">
                            <ul id="menu-idiomas" className="menu">
                                <li className="qtranxs-lang-menu">
                                    <div className="lang-selector">
                                        <span
                                            onClick={() => changeLanguage("es")}
                                            className={currentLang === "es" ? "lang-active" : ""}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img src={Espanol} alt="Esp /" className="hidden-flag" />
                                            Esp
                                        </span>
                                        <span style={{ margin: "0 0.5em" }}>/</span>
                                        <span
                                            onClick={() => changeLanguage("en")}
                                            className={currentLang === "en" ? "lang-active" : ""}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <img src={Ingles} alt="Eng" className="hidden-flag" />
                                            Eng
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`is_containerNav_Mobile ${menuOpen ? "showMenu" : ""}`}>
                <div className="is_row-Mobile">
                    <div>
                        <div className="field-lang-movil">
                            <div className="menu-idiomas-container">
                                <ul id="menu-idiomas-1" className="menu">
                                    <li className="qtranxs-lang-menu">
                                        <div className="lang-selector">
                                            <span
                                                onClick={() => changeLanguage("es")}
                                                className={currentLang === "es" ? "lang-active" : ""}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img
                                                    src={Espanol}
                                                    alt="Esp /"
                                                    className="hidden-flag"
                                                />
                                                Esp
                                            </span>
                                            <span style={{ margin: "0 0.5em" }}>/</span>
                                            <span
                                                onClick={() => changeLanguage("en")}
                                                className={currentLang === "en" ? "lang-active" : ""}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <img src={Ingles} alt="Eng" className="hidden-flag" />
                                                Eng
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <nav>
                            <div className="menu-menu-container">
                                <ul id="menu-menu-1" className="menu">
                                    <li>
                                        <a href="/estudio">{t("estudio")}</a>
                                    </li>
                                    <li>
                                        <a href="/abogados">{t("abogados")}</a>
                                    </li>
                                    <li>
                                        <a href="/servicio">{t("servicios")}</a>
                                    </li>
                                    <li>
                                        <a href="/blog">{t("blog")}</a>
                                    </li>
                                    <li>
                                        <a href="/contacto">{t("contacto")}</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <section>
                <div id="wp_containerSlider-Home">
                    <Slider ref={sliderRef} {...settings}>
                        <div className="slick_Banner_Home">
                            <div
                                className="wp_columnSlider-Home"
                                style={{
                                    backgroundImage: `url(${foto1})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="wp_layerSlider-Home">
                                    <div>
                                        <div id="button-slider">
                                            <button
                                                className="slick_prev_arrow_add"
                                                type="button"
                                                onClick={() => sliderRef.current.slickPrev()}
                                            ></button>
                                            <button
                                                className="slick_next_arrow_add"
                                                type="button"
                                                onClick={() => sliderRef.current.slickNext()}
                                            ></button>
                                        </div>
                                        <div id="numer-slider">
                                            01 / <span>02</span>
                                        </div>
                                        <h2>{t("slider1.titulo")}</h2>
                                        <h3>{t("slider1.subtitulo")}</h3>
                                        <a href="/estudio">{t("slider1.boton")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slick_Banner_Home">
                            <div
                                className="wp_columnSlider-Home"
                                style={{
                                    backgroundImage: `url(${foto2})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="wp_layerSlider-Home">
                                    <div>
                                        <div id="button-slider">
                                            <button
                                                className="slick_prev_arrow_add"
                                                type="button"
                                                onClick={() => sliderRef.current.slickPrev()}
                                            ></button>
                                            <button
                                                className="slick_next_arrow_add"
                                                type="button"
                                                onClick={() => sliderRef.current.slickNext()}
                                            ></button>
                                        </div>
                                        <div id="numer-slider">
                                            02 / <span>02</span>
                                        </div>
                                        <h2>{t("slider2.titulo")}</h2>
                                        <h3>{t("slider2.subtitulo")}</h3>
                                        <a href="/estudio">{t("slider2.boton")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="servicios-destacados">
                    <div className="titulo-bloque">
                        <h2>{t("serviciosDestacados.titulo")}</h2>
                    </div>

                    <div className="descripcion-general">
                        <p>
                            <strong>{t("serviciosDestacados.introTitulo")}</strong>
                        </p>
                        <p>{t("serviciosDestacados.introDescripcion")}</p>
                    </div>

                    <div className="contenedor-servicios">
                        <div className="servicio">
                            <div className="titulo-servicio">
                                {t("serviciosDestacados.items.corporativo.titulo")}
                            </div>
                            <div className="imagen-servicio">
                                <img src={derechocorporativo} alt="" />
                            </div>
                            <div className="descripcion-servicio">
                                {t("serviciosDestacados.items.corporativo.descripcion")}
                            </div>
                        </div>

                        <div className="servicio">
                            <div className="titulo-servicio">
                                {t("serviciosDestacados.items.litigios.titulo")}
                            </div>
                            <div className="imagen-servicio">
                                <img src={derechotributario} alt="" />
                            </div>
                            <div className="descripcion-servicio">
                                {t("serviciosDestacados.items.litigios.descripcion")}
                            </div>
                        </div>

                        <div className="servicio">
                            <div className="titulo-servicio">
                                {t("serviciosDestacados.items.propiedadIntelectual.titulo")}
                            </div>
                            <div className="imagen-servicio">
                                <img src={derechoinmobiliario} alt="" />
                            </div>
                            <div className="descripcion-servicio">
                                {t(
                                    "serviciosDestacados.items.propiedadIntelectual.descripcion"
                                )}
                            </div>
                        </div>

                        <div className="servicio">
                            <div className="titulo-servicio">
                                {t("serviciosDestacados.items.tributario.titulo")}
                            </div>
                            <div className="imagen-servicio">
                                <img src={propiedadintelectual} alt="" />
                            </div>
                            <div className="descripcion-servicio">
                                {t("serviciosDestacados.items.tributario.descripcion")}
                            </div>
                        </div>
                    </div>

                    <div className="ver-todos">
                        <a href="/servicio">{t("serviciosDestacados.verTodos")}</a>
                    </div>
                </div>

                <div className="separador-seccion"></div>
                <div className="bloque-contacto" id="contacto">
                    <div className="contacto-wrapper">
                        <div className="contacto-formulario">
                            <form>
                                <div className="form-intro">
                                    <h2 className="titulo-con-linea">
                                        {t("contactoFormulario.titulo")}
                                    </h2>
                                    <p>{t("contactoFormulario.descripcion")}</p>
                                </div>

                                <label htmlFor="nombre">{t("contactoFormulario.nombre")}</label>
                                <input type="text" id="nombre" name="nombre" required />

                                <label htmlFor="correo">{t("contactoFormulario.correo")}</label>
                                <input type="email" id="correo" name="correo" required />

                                <label htmlFor="asunto">{t("contactoFormulario.asunto")}</label>
                                <input type="text" id="asunto" name="asunto" required />

                                <label htmlFor="mensaje">
                                    {t("contactoFormulario.mensaje")}
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows="5"
                                    required
                                ></textarea>

                                <div className="checkbox-terminos">
                                    <div className="checkbox-container">
                                        <label className="checkbox-label">
                                            <input
                                                type="checkbox"
                                                id="acepta"
                                                checked={aceptado}
                                                required
                                                onChange={(e) => setAceptado(e.target.checked)}
                                            />
                                            <span className="checkmark">{aceptado && "✔"}</span>
                                        </label>

                                        <div className="checkbox-text">
                                            {t("contactoFormulario.acepto1")}&nbsp;
                                            <span
                                                className="link"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setMostrarModal("privacidad");
                                                }}
                                            >
                                                {t("contactoFormulario.privacidad")}
                                            </span>
                                            &nbsp;{t("contactoFormulario.acepto2")}&nbsp; Bertorini &
                                            Godoy Abogados S.A. (
                                            <span
                                                className="link"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setMostrarModal("terminos");
                                                }}
                                            >
                                                {t("contactoFormulario.terminos")}
                                            </span>
                                            )
                                        </div>
                                    </div>
                                </div>
                                <div className="botonformulario">
                                    <button type="submit">{t("contactoFormulario.boton")}</button>
                                </div>
                            </form>
                        </div>

                        {mostrarModal === "privacidad" && (
                            <div className="modal">
                                <div className="modal-contenido">
                                    <button
                                        className="cerrar"
                                        onClick={() => setMostrarModal(null)}
                                    >
                                        ×
                                    </button>
                                    <h3>{t("modalPrivacidad.titulo")}</h3>
                                    <p>
                                        <strong>{t("modalPrivacidad.actualizacion")}</strong>
                                    </p>
                                    <p>{t("modalPrivacidad.texto1")}</p>
                                    <p>
                                        <strong>{t("modalPrivacidad.seccion1")}</strong>
                                        <br />
                                        {t("modalPrivacidad.texto2")}
                                    </p>
                                    <p>
                                        <strong>{t("modalPrivacidad.seccion2")}</strong>
                                        <br />
                                        {t("modalPrivacidad.texto3")}
                                    </p>
                                    <p>
                                        <strong>{t("modalPrivacidad.seccion3")}</strong>
                                        <br />
                                        {t("modalPrivacidad.texto4")}
                                    </p>
                                    <p>
                                        <strong>{t("modalPrivacidad.seccion4")}</strong>
                                        <br />
                                        {t("modalPrivacidad.texto5")}{" "}
                                        <a href="mailto:contacto@fobego.com.pe">
                                            contacto@fobego.com.pe
                                        </a>
                                    </p>
                                    <p>
                                        <strong>{t("modalPrivacidad.seccion5")}</strong>
                                        <br />
                                        {t("modalPrivacidad.texto6")}
                                    </p>
                                </div>
                            </div>
                        )}

                        {mostrarModal === "terminos" && (
                            <div className="modal">
                                <div className="modal-contenido">
                                    <button
                                        className="cerrar"
                                        onClick={() => setMostrarModal(null)}
                                    >
                                        ×
                                    </button>
                                    <h3>{t("modalTerminos.titulo")}</h3>
                                    <p>
                                        <strong>{t("modalTerminos.actualizacion")}</strong>
                                    </p>
                                    <p>{t("modalTerminos.texto1")}</p>
                                    <p>
                                        <strong>{t("modalTerminos.seccion1")}</strong>
                                        <br />
                                        {t("modalTerminos.texto2")}
                                    </p>
                                    <p>
                                        <strong>{t("modalTerminos.seccion2")}</strong>
                                        <br />
                                        {t("modalTerminos.texto3")}
                                    </p>
                                    <p>
                                        <strong>{t("modalTerminos.seccion3")}</strong>
                                        <br />
                                        {t("modalTerminos.texto4")}
                                    </p>
                                    <p>
                                        <strong>{t("modalTerminos.seccion4")}</strong>
                                        <br />
                                        {t("modalTerminos.texto5")}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="contacto-info">
                            <h3 className="titulo-con-linea">
                                {t("contactoFormulario.visitanos")}
                            </h3>
                            <p>
                                <strong>{t("contactoFormulario.direccionLabel")}</strong>
                                <br />
                                Av. Camino Real 456, Torre Real, Interior 1301, San Isidro
                            </p>
                            <p>
                                <strong>{t("contactoFormulario.telefonoLabel")}</strong>
                                <br />
                                <a href="tel:989030290">989 030 290</a>
                            </p>
                            <p>
                                <strong>{t("contactoFormulario.siguenos")}</strong>
                                <br />
                                <a href="https://www.linkedin.com/company/fobego-s-a/posts/?feedView=all">
                                    <img src={Linkedin} alt="LinkedIn" className="icon-social" />
                                </a>
                            </p>

                            <div className="contacto-mapa">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.205689408489!2d-77.0390912851869!3d-12.09806669143313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c843235286c5%3A0xfd132c7283f1813d!2sInterior%201301%2C%20Av.%20Camino%20Real%20456%2C%20San%20Isidro%2015073!5e0!3m2!1ses-419!2spe!4v1614173671806!5m2!1ses-419!2spe"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Ubicación FOBEGO"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="wp_center wp_flexbox">
                    {/* Logo */}
                    <div className="row-footer row-logo-footer">
                        <img src={logo_footer} alt="Logo Fobego" />
                    </div>

                    {/* Contacto */}
                    <div className="row-footer">
                        <h6>{t("contacto")}</h6>
                        <address className="wp_link_Footer">
                            <span>
                                📍 Av. Camino Real 456, Torre Real, Oficina 1301, San Isidro –
                                Lima
                            </span>
                            <a
                                href="https://api.whatsapp.com/send?phone=51989030290"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📞 989 030 290
                            </a>
                            <a href="mailto:contacto@fobego.com.pe">
                                ✉️ contacto@fobego.com.pe
                            </a>
                        </address>
                    </div>
                    {/* Legal */}
                    <div className="row-footer">
                        <h6>{t("legal")}</h6>
                        <nav className="wp_link_Footer">
                            <ul className="menu">
                                <li>
                                    <button
                                        type="button"
                                        className="footer-link-button"
                                        onClick={() => setMostrarModal("terminos")}
                                    >
                                        {t("contactoFormulario.terminos")}
                                    </button>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        className="footer-link-button"
                                        onClick={() => setMostrarModal("privacidad")}
                                    >
                                        {t("contactoFormulario.privacidad")}
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    {/* Redes Sociales */}
                    <div className="row-footer row-linkedin-footer">
                        <a
                            href="https://www.linkedin.com/company/fobego-s-a/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Síguenos en <img src={Social} alt="LinkedIn Fobego" />
                        </a>
                    </div>
                </div>
            </footer>

            <div className="wasap sprite-wasap">
                <a
                    href="https://api.whatsapp.com/send?phone=51989030290"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "block",
                        border: "0",
                        width: "59px",
                        height: "60px",
                    }}
                >
                    <svg className="" viewBox="0 0 55 55" width="60">
                        <switch>
                            <g id="wasap">
                                <circle cx="27" cy="27" r="27" fill="#39C040" />
                                <circle cx="27" cy="27" r="23" fill="#39C040" />
                                <path
                                    fill="#FFF"
                                    fillRule="nonzero"
                                    d="M26.952 13C34.628 13 41 19.276 41 26.903 41 34.531 34.628 41 26.952 41c-2.414 0-4.731-.772-6.807-1.931L13 41l1.931-7C13.676 31.828 13 29.414 13 26.903 13 19.276 19.276 13 26.952 13zm0 2.414c-6.373 0-11.538 5.117-11.538 11.49 0 2.22.627 4.393 1.786 6.227l.29.435-1.11 4.055 4.151-1.062.435.241c1.786 1.11 3.862 1.786 6.034 1.786 6.324 0 11.586-5.262 11.586-11.683 0-6.42-5.262-11.49-11.634-11.49z"
                                />
                                <path
                                    fill="#FFF"
                                    fillRule="nonzero"
                                    d="M23.234 20.434l-.917-.048c-.29 0-.579.097-.772.29-.435.386-1.159 1.11-1.352 2.076-.338 1.448.193 3.186 1.448 4.924 1.256 1.738 3.67 4.538 7.918 5.745 1.351.386 2.413.145 3.282-.387a2.848 2.848 0 0 0 1.256-1.834l.144-.676a.485.485 0 0 0-.24-.53l-3.042-1.4a.46.46 0 0 0-.58.144l-1.207 1.545c-.096.096-.24.145-.386.096-.82-.29-3.572-1.448-5.069-4.345-.048-.144-.048-.29.049-.386l1.158-1.303c.097-.145.145-.338.097-.483l-1.4-3.138a.42.42 0 0 0-.387-.29"
                                />
                            </g>
                        </switch>
                    </svg>
                </a>
            </div>
            {/*

            <div className="bloque-recursos">
                    <h2 className="titulo-general">Recursos Legales y Actualidad Jurídica</h2>

                    <div className="recurso-tarjeta">
                        <div className="recurso-info">
                            <p className="subtitulo-recursos">SUNAFIL intensifica fiscalizaciones remotas</p>
                            <div className="contenido-recurso">
                                <p className="recurso-titulo">
                                    <span className="emoji">📌</span>
                                    <strong>Preparación empresarial ante fiscalizaciones</strong>
                                </p>
                                <p className="recurso-meta">
                                    <span className="emoji">🗓️</span> Junio 2025 – Alerta Legal
                                </p>
                                <p className="recurso-descripcion">
                                    Te explicamos cómo preparar tu empresa para responder de forma efectiva.
                                </p>
                                <div className="ver-mas-recursos">
                                    <a href="/recursos">
                                        <span className="icono-diamante">♦</span> [Ver mas sobre ese recurso]
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="recurso-imagen">
                            <img src={derechocorporativo} alt="SUNAFIL" />
                        </div>
                    </div>


                    <div className="cta-recursos">
                        <p className="cta-texto">
                            ¿Quieres ver más recursos útiles y actualizaciones legales?
                        </p>
                        <a className="cta-boton" href="/recursos">
                            👉 Presiona aquí para explorar más
                        </a>
                    </div>

                </div>
            
            <div id="wp_containerContact_Home">
                    <div className="wp_wrapperContact_Home">
                        <div className="wp_center wp_flexbox relative">
                            <div className="wp_containerForm_Home">
                                <div className="left-contact">
                                    <div className="wp_formTitle_Home">
                                        <h2>Escríbenos</h2>
                                        <div className="wp_textForm_Home">
                                            <p>Si usted desea recibir mayor información o si tiene alguna consulta, sugerencia o comentario, sírvase llenar el siguiente formulario:
                                            </p>
                                        </div>
                                    </div>
                                    <div className="wp_containerField_Form_Home">

                                        <div className="wpcf7 no-js" id="wpcf7-f28-p158-o1" lang="en-US" dir="ltr">
                                            <div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
                                            <form onSubmit={handleSubmit} method="post" className="wpcf7-form init" aria-label="Contact form" noValidate data-status="init">
                                                <p>
                                                    <label>Nombre y Apellidos</label>
                                                    <span className="wpcf7-form-control-wrap" data-name="Nombres">
                                                        <input
                                                            size="40"
                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                            aria-required="true"
                                                            value={formData.Nombres}
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="Nombres"
                                                        />
                                                    </span>
                                                </p>
                                                <p>
                                                    <label>Correo Electrónico</label>
                                                    <span className="wpcf7-form-control-wrap" data-name="Correo">
                                                        <input
                                                            size="40"
                                                            className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                                            aria-required="true"
                                                            value={formData.Correo}
                                                            onChange={handleChange}
                                                            type="email"
                                                            name="Correo"
                                                        />
                                                    </span>
                                                </p>
                                                <p>
                                                    <label>Asunto</label>
                                                    <span className="wpcf7-form-control-wrap" data-name="Asunto">
                                                        <input
                                                            size="40"
                                                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                                            aria-required="true"
                                                            value={formData.Asunto}
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="Asunto"
                                                        />
                                                    </span>
                                                </p>
                                                <p>
                                                    <label>Mensaje</label>
                                                    <span className="wpcf7-form-control-wrap" data-name="Mensaje">
                                                        <textarea
                                                            cols="40"
                                                            rows="10"
                                                            className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                            aria-required="true"
                                                            value={formData.Mensaje}
                                                            onChange={handleChange}
                                                            name="Mensaje"
                                                        />
                                                    </span>
                                                </p>
                                                <p>
                                                    <input className="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Enviar" />
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-contact">
                                    <img src={Imagen_formulario_formato} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            
            
            <div id="wp_container_TheContent-Home">
                    <div className="wp_centered">
                        <p>
                            Fort, Bertorini &#038; Godoy Abogados S.A. (Fobego), es una empresa de servicios legales reconocida por su trayectoria y ética profesional, prestigio y experiencia forjada desde hace más de cuarenta y cuatro años de presencia activa en el Perú, contando con una cartera importante de clientes nacionales y extranjeros.
                        </p>
                        <a href="estudio">
                            Leer más
                        </a>
                    </div>
                </div>*/}

            {/*<div id="wp_container_post-Home">
                    <div className="wp_center">
                        <div className="row-title-block wp_flexbox">
                            <h2>Artículos Destacados</h2>
                            <a href="/blog">Ir a blog</a>
                        </div>

                        <div className="row-post-Home">
                            <ul>
                                <li>
                                    <div className="row-image-post">
                                        <a href="/blog/noticias/actosinscritosmedianteplataformaidsunarp2021/"><img src={imange_noticia1} alt="" /></a>
                                    </div>
                                    <div className="row-content-post">
                                        <span>23.02.2021</span>
                                        <h3>Actos que deben ser inscritos mediante la plataforma SID- SUNARP 2021</h3>
                                        <p>Con fecha 05 de Junio del año en curso, ha sido publicado en el Diario Oficial el...</p>
                                        <a href="/blog/noticias/actosinscritosmedianteplataformaidsunarp2021/">Leer más</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>*/}
        </>
    );
};
