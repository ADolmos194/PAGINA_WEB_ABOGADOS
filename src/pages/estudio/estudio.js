
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '@assets/webanterior/logo.svg';
import Espanol from '@assets/webanterior/es.png';
import Ingles from '@assets/webanterior/gb.png';
import sala_conferencia from "@assets/webanterior/image.jpg";
import FundadorJoseCarlos from "@assets/webanterior/FundadorJoseCarlos.jpg";
import FundadorFelipeBertorini from "@assets/webanterior/FundadorFelipeBertorini.jpg";
import FundadorFernandoFort from "@assets/webanterior/FundadorFernandoFort.jpg"
import logo_footer from "@assets/webanterior/logo-footer.svg";
import Social from "@assets/webanterior/social.svg"

export const Estudio = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                <div id="wp_containerSlider-Page">
                    <div class="line-nav"></div>
                    <div class="layer-page">
                        <h1>Nuestro Estudio</h1>
                        <p>Fort, Bertorini &#038; Godoy Abogados S.A. (Fobego), es una empresa de servicios legales reconocida por su trayectoria y ética profesional, prestigio y experiencia forjada desde hace más de cuarenta y cuatro años de presencia activa en el Perú, contando con una cartera importante de clientes nacionales y extranjeros.
                        </p>
                    </div>
                </div>
                <div id="wp_containerContent-Page">
                    <div class="wp_center">
                        <p>El Estudio se denomina «Fort, Bertorini &#038; Godoy Abogados» ¨FOBEGO¨ y las áreas principales en las que presta servicios son: asuntos corporativos, bancarios, financieros, de seguros, contratos en general, tributarios, inversión extranjera, privatizaciones, propiedad industrial e intelectual, navieros, mineros, industriales, inmobiliarios, laborales, administrativos, concurso de acreedores, ambientales, judiciales, comerciales, telecomunicaciones, familiares, licitaciones públicas y privadas, legislación educativa y asuntos en general.</p>
                        <p>El Estudio fue fundado en 1977 y ofrece desde entonces los servicios legales mencionados en el párrafo precedente. Cuenta con una extensa cartera de clientes tanto locales, como extranjeros. Adicionalmente, a los Socios Fundadores se ha incorporado a la sociedad a los abogados doctores Álvaro Villalobos Díaz, George González Acosta, y Renzo Inga Miranda quienes tienen a su cargo fundamentalmente el área Procesal, Tributaria, Corporativa y de Propiedad Intelectual, respectivamente. El testimonio y reconocimiento de nuestros clientes representan una garantía en la calidad de los servicios brindados lograda a través de más de cuarenta años de trayectoria profesional.<br />
                        </p>		</div>
                </div>
                <div id="wp_containerImage-Page">
                    <div class="wp_center">
                        <img src={sala_conferencia} alt="sala_conferencia" />
                        <div class="line-image"></div>
                    </div>
                </div>

                <div id="wp_containerList-Staff">
                    <div class="wp_center">
                        <h2>Fundadores</h2>
                        <div class="row-item-staff">
                            <div class="column-staff">
                                <div class="image-staff">
                                    <a href="/abogados/perfilabogado/fundadores/JoseCarlosGodoyLacoste">
                                        <img src={FundadorJoseCarlos} alt="FundadorJoseCarlos" />
                                    </a>
                                </div>
                                <div class="content-staff">
                                    <h3>José Carlos Godoy Lacoste
                                    </h3>
                                    <span>Socio Fundador
                                    </span>
                                </div>
                                <a href="/abogados/perfilabogado/fundadores/JoseCarlosGodoyLacoste" class="button-staff">Ver Perfil</a>
                            </div>
                            <div class="column-staff">
                                <div class="image-staff">
                                    <a href="/abogados/perfilabogado/fundadores/FelipeBertoriniGuibert">
                                        <img src={FundadorFelipeBertorini} alt="FundadorFelipeBertorini" />
                                    </a>
                                </div>
                                <div class="content-staff">
                                    <h3>Felipe Bertorini Guibert
                                    </h3>
                                    <span>Socio Fundador
                                    </span>
                                </div>
                                <a href="/abogados/perfilabogado/fundadores/FelipeBertoriniGuibert" class="button-staff">Ver Perfil</a>
                            </div>
                            <div class="column-staff">
                                <div class="image-staff">
                                    <a href="/abogados/perfilabogado/fundadores/FernandoFortMarie">
                                        <img src={FundadorFernandoFort} alt="FundadorFernandoFort" />
                                    </a>
                                </div>
                                <div class="content-staff">
                                    <h3>Fernando Fort Marie
                                    </h3>
                                    <span>Socio Fundador
                                    </span>
                                </div>
                                <a href="/abogados/perfilabogado/fundadores/FernandoFortMarie" class="button-staff">Ver Perfil</a>
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