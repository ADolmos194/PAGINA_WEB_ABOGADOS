import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Logo from '@assets/webanterior/logo.svg';
import Espanol from '@assets/webanterior/es.png';
import Ingles from '@assets/webanterior/gb.png';
import foto1 from "@assets/webanterior/foto-nueva-F.jpg";
import foto2 from "@assets/webanterior/Baner_imagen-2_Web.jpg";
import logo_footer from "@assets/webanterior/logo-footer.svg";
import Social from "@assets/webanterior/social.svg";
import imange_noticia1 from "@assets/webanterior/Imagen-noticia-n.jpg";
import Imagen_formulario_formato from "@assets/webanterior/Imagen-formulario-en-formato.jpg";

import emailjs from "@emailjs/browser";

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

    const [formData, setFormData] = useState({
        Nombres: '',
        Correo: '',
        Asunto: '',
        Mensaje: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            alert("Correo enviado con éxito!");
            setFormData({ Nombres: "", Correo: "", Asunto: "", Mensaje: "" });
        })
        .catch((error) => console.error("Error al enviar el correo:", error));
    };

    return (
        <>
            <header>
                <div className="wp_center wp_flexbox">
                    <div className="wp_containerLogo">
                        <a href="/">
                        <img src={Logo} alt="Logo" />
                    </a>
                    </div>
                    <div className={`is_icoNav ${menuOpen ? "closeNav" : ""}`} onClick={toggleMenu}>
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
                            <div className="menu-menu-container">
                                <ul id="menu-menu" className="menu">
                                    <li id="menu-item-124" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-124"><a href="/estudio">Estudio</a></li>
                                    <li id="menu-item-131" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131"><a href="/abogados">Abogados</a></li>
                                    <li id="menu-item-139" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"><a href="/servicio">Servicios</a></li>
                                    <li id="menu-item-163" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"><a href="/blog">Blog</a></li>
                                    <li id="menu-item-169" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-169"><a href="/contacto">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="field-lang">
                            <div className="menu-idiomas-container">
                                <ul id="menu-idiomas" className="menu">
                                    <li id="menu-item-193" className="qtranxs-lang-menu qtranxs-lang-menu-es menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-193">
                                        <Link href="#" title="Esp /">Language Menu:&nbsp;
                                            <img src={Espanol} alt="Esp /" /></Link>
                                        <ul className="sub-menu">
                                            <li id="menu-item-194" className="qtranxs-lang-menu-item qtranxs-lang-menu-item-es menu-item menu-item-type-custom menu-item-object-custom menu-item-194">
                                                <a href="/" title="Esp /"><img src={Espanol} alt="Esp /" />&nbsp;Esp /</a></li>
                                            <li id="menu-item-195" className="qtranxs-lang-menu-item qtranxs-lang-menu-item-en menu-item menu-item-type-custom menu-item-object-custom menu-item-195">
                                                <a href="/" title="Eng"><img src={Ingles} alt="Eng" />&nbsp;Eng</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
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
                                    <li className="qtranxs-lang-menu qtranxs-lang-menu-es menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-193"><Link href="#" title="Esp /">Language Menu:&nbsp;<img src={Espanol} alt="Esp /" /></Link>
                                        <ul className="sub-menu">
                                            <li className="qtranxs-lang-menu-item qtranxs-lang-menu-item-es menu-item menu-item-type-custom menu-item-object-custom menu-item-194"><a href="/" title="Esp /"><img src={Espanol} alt="Esp /" />&nbsp;Esp /</a></li>
                                            <li className="qtranxs-lang-menu-item qtranxs-lang-menu-item-en menu-item menu-item-type-custom menu-item-object-custom menu-item-195"><a href="/" title="Eng"><img src={Ingles} alt="Eng" />&nbsp;Eng</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav>
                            <div className="menu-menu-container">
                                <ul id="menu-menu-1" className="menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-124"><a href="/estudio">Estudio</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-131"><a href="/abogados">Abogados</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-139"><a href="/servicio">Servicios</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-163"><a href="/blog">Blog</a></li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-169"><a href="/contacto">Contacto</a></li>
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
                            <div className="wp_columnSlider-Home"
                                style={{backgroundImage: `url(${foto1})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"}}>
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
                                        <h2>Más de cuarenta y cuatro años de experiencia.</h2>
                                        <h3>Fobego inició en 1977 y no hemos parado desde entonces</h3>
                                        <a href="/estudio">Leer más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slick_Banner_Home">
                            <div className="wp_columnSlider-Home"
                                style={{
                                    backgroundImage: `url(${foto2})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}>
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
                                        <h2>Ética profesional, prestigio y experiencia.</h2>						
                                        <h3>Consulta nuestros servicios legales</h3>						
                                        <a href="nuestros-servicios">Leer más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
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
                </div>

                <div id="wp_container_post-Home">
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
            </section>

            <footer>
                <div className="wp_center wp_flexbox">
                    <div className="row-footer row-logo-footer">
                        <img src={logo_footer} alt="" />
                    </div>
                    <div className="row-footer">
                        <h6>Contacto</h6>
                        <div className="wp_link_Footer">
                            <span>Av. Camino Real 456, Torre Real, Interior 1301, San Isidro
                            </span>
                            <a href="tel:989 030 290
">
                                Telf.					989 030 290
                            </a>
                        </div>
                    </div>
                    <div className="row-footer">
                        <h6>Legal</h6>
                        <div className="wp_link_Footer">
                            <div className="menu-pie-de-pagina-container"><ul id="menu-pie-de-pagina" className="menu">
                                <li id="menu-item-109" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-109">
                                    <Link href="#">Términos &#038; Condiciones</Link>
                                </li>
                                <li id="menu-item-110" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-110">
                                    <Link href="#">Privacidad</Link>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row-footer row-linkedin-footer">
                        <Link href="#">Síguenos en<img src={Social} alt="" /></Link>
                    </div>
                </div>
            </footer>
            <div className="wasap sprite-wasap">
                <a href="https://api.whatsapp.com/send?phone=51989030290" target="_blank" rel="noopener noreferrer"
                    style={{
                        display: 'block',
                        border: '0',
                        width: '59px',
                        height: '60px',
                    }}>
                    <svg className="" viewBox="0 0 55 55" width="60">
                        <switch>
                            <g id="wasap">
                                <circle cx="27" cy="27" r="27" fill="#39C040" />
                                <circle cx="27" cy="27" r="23" fill="#39C040" />
                                <path fill="#FFF" fillRule="nonzero" d="M26.952 13C34.628 13 41 19.276 41 26.903 41 34.531 34.628 41 26.952 41c-2.414 0-4.731-.772-6.807-1.931L13 41l1.931-7C13.676 31.828 13 29.414 13 26.903 13 19.276 19.276 13 26.952 13zm0 2.414c-6.373 0-11.538 5.117-11.538 11.49 0 2.22.627 4.393 1.786 6.227l.29.435-1.11 4.055 4.151-1.062.435.241c1.786 1.11 3.862 1.786 6.034 1.786 6.324 0 11.586-5.262 11.586-11.683 0-6.42-5.262-11.49-11.634-11.49z" />
                                <path fill="#FFF" fillRule="nonzero" d="M23.234 20.434l-.917-.048c-.29 0-.579.097-.772.29-.435.386-1.159 1.11-1.352 2.076-.338 1.448.193 3.186 1.448 4.924 1.256 1.738 3.67 4.538 7.918 5.745 1.351.386 2.413.145 3.282-.387a2.848 2.848 0 0 0 1.256-1.834l.144-.676a.485.485 0 0 0-.24-.53l-3.042-1.4a.46.46 0 0 0-.58.144l-1.207 1.545c-.096.096-.24.145-.386.096-.82-.29-3.572-1.448-5.069-4.345-.048-.144-.048-.29.049-.386l1.158-1.303c.097-.145.145-.338.097-.483l-1.4-3.138a.42.42 0 0 0-.387-.29" />
                            </g>
                        </switch>
                    </svg>
                </a>
            </div>
        </>
    )
}