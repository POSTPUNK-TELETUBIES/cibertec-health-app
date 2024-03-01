'use client'
import { Box, Typography, Link } from "@mui/material"
import { About } from "../About"
import { Services } from "../Services"
import { Tecnology } from "../Tecnology"
import { useState } from "react"

import Image from "next/image"


export const AboutHaidoc = () => {
    const Menu = (): JSX.Element => {
        const handleViewChange = (view: 'about' | 'services' | 'tecnology') => {
            setCurrentView(view)
        }
        return <Box bgcolor={'#F4FEFF'} display={'flex'} flexDirection={'column'} gap={'4rem'}>
            <Box display={'flex'} bgcolor={'#48CED5'} flexDirection={'column'} gap={'1rem'}
                sx={
                    {
                        padding: '2rem 1rem',
                        borderRadius: '20px',
                        '& > h4': {
                            fontSize: '2.9rem',
                        },
                        '& > a': {
                            maxWidth: '50ch',
                            textDecoration: 'none',
                            fontSize: '1.5rem',
                            color: 'white',
                            textAlign: 'center'
                        },
                        '& .white-divider': {
                            height: '4px',
                            backgroundColor: 'white',
                            margin: '1rem 0',
                            borderRadius: '50%',
                        }
                    }
                }>
                <Link href={'#'} onClick={() => { handleViewChange('about') }}>Sobre Haidoc</Link>
                <div className="white-divider"></div>
                <Link href={'#'} onClick={() => { handleViewChange('tecnology') }}>Tecnologia</Link>
                <div className="white-divider"></div>
                <Link href={'#'} onClick={() => { handleViewChange('services') }}>Servicios</Link>
            </Box>
            <Image
                width={400}
                height={600}
                alt="old lady doctor smiling with glasses"
                src={"/about-doctor.png"}
            />
        </Box>
    }
    const [currentView, setCurrentView] = useState<'about' | 'services' | 'tecnology'>('about');
    return (
        // <>
        //     {currentView === 'about' && <About Menu: ={Menu} />}
        //     {currentView === 'tecnology' && <Tecnology />}
        //     {currentView === 'services' && <Services />}
        // </>
        <Box display={'grid'} paddingInline={{ xs: '1rem', md: '3rem', lg: '6rem' }} flexBasis={{
            xs: 0,
            lg: '50%'
        }} sx={{
            '& img': {
                maxHeight: '52rem',
                maxWidth: '600px'
            },
            '& .blue-divider': {
                height: '4px',
                backgroundColor: '#48CED5',
                margin: '1rem 0',
                borderRadius: '50%',
            },
            '& .gray-divider': {
                height: '4px',
                backgroundColor: '#c4c4c4',
                margin: '.5rem 0',
                borderRadius: '50%',
            },

        }}>
            <Typography
                variant="h4"
                color="sheldon"
                fontSize={'4rem'}>
                Sobre Haidoc
            </Typography>
            <div className="blue-divider"></div>
            <Box display={'flex'} gap={'3rem'}>
                <Menu />
                <Box display={'flex'} flexDirection={'column'} gap={'1rem'}
                    sx={
                        {
                            '& > img': {
                                margin: '0 auto',
                            }
                        }
                    }>
                    <Typography>
                        Somos HaiDoc, la red privada de salud más importante del país, resultado de un esfuerzo que ha integrado lo mejor de la medicina peruana, en términos de infraestructura, talento humano, tecnología y buenas prácticas, con la guía continua de Johns Hopkins Medicine International, división internacional de un gran líder mundial en medicina y salud.
                        Nacimos con el objetivo de resolver todas tus necesidades de Pruebsalud. Sea algo sencillo o complejo, un simple resfriado o un trasplante de médula ósea, una consulta ambulatoria o un tratamiento hospitalario, HaiDoc ofrece una experiencia integral marcada por la excelencia médica y la sensibilidad humana.
                    </Typography>
                    <Typography variant="h4">Visión</Typography>
                    <div className="gray-divider"></div>
                    <Typography>
                        Ser el mejor sistema integrado de salud a nivel nacional, brindando acceso a los más altos estándares de calidad y seguridad médica.
                    </Typography>
                    <Typography variant="h4">Misión</Typography>
                    <div className="gray-divider"></div>
                    <Typography>
                        Brindamos tranquilidad a los pacientes y sus familias a través de servicios integrados de salud accesibles y de alta calidad, utilizando las mejores prácticas médicas con personal ético y altamente calificado.
                    </Typography>
                    <Typography variant="h4">Valores</Typography>
                    <div className="gray-divider"></div>
                    <Typography>
                        <ul>
                            <li>Excelencia en el servicio y el cuidado de la salud</li>
                            <li>Alta calidad médica y seguridad del paciente</li>
                            <li>Integridad, respeto y compromiso</li>
                            <li>Responsabilidad en el manejo de recursos</li>
                            <li>Accesibilidad a productos y servicios</li>
                        </ul>
                    </Typography>




                    {/* Technologies */}
                    <Typography>
                        Nuevo Resonador Magnético: GE optima MR450x 1.5T
                    </Typography>
                    <div className="gray-divider"></div>
                    <Image
                        width={600}
                        height={300}
                        alt="resonador magnetico"
                        src={"/resonador-magnetico.png"}
                    />
                    <Typography>
                        Nuevo Tomógrafo Computarizado GE Revolution GSI Spectral Imaging
                    </Typography>
                    <div className="gray-divider"></div>
                    <Image
                        width={600}
                        height={300}
                        alt="tomografo"
                        src={"/tomografo.png"}
                    />
                    <Typography>
                        Mamógrafo 3D Tomosíntesis
                    </Typography>
                    <div className="gray-divider"></div>
                    <Image
                        width={600}
                        height={300}
                        alt="mamografo"
                        src={"/mamografo.png"}
                    />




                    {/* Services */}
                    <Box display={'grid'} gridTemplateColumns={'1fr 1fr'} gap={'1rem'}>
                        <Image
                            width={600}
                            height={300}
                            alt="medico a tu casa"
                            src={"/delivery-medic.png"}
                        />
                        <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                            <Typography variant="h4">HaiDoc Médicos a Domicilio</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
                            </Typography>
                        </Box>
                        <Image
                            width={600}
                            height={300}
                            alt="medico a tu casa"
                            src={"/ambulances.png"}
                        />
                        <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                            <Typography variant="h4">HaiDoc Ambulancias</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
                            </Typography>
                        </Box>
                        <Image
                            width={600}
                            height={300}
                            alt="nutricionista a tu casa"
                            src={"/delivery-nutritionist.png"}
                        />
                        <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                            <Typography variant="h4">HaiDoc Nutricionistas a Domicilio</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
                            </Typography>
                        </Box>
                        <Image
                            width={600}
                            height={300}
                            alt="medico en linea"
                            src={"/dr-online.png"}
                        />
                        <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
                            <Typography variant="h4">HaiDoc Dr.Online</Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
            </Box>





        </Box>
    );
}