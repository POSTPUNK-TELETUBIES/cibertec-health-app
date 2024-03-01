import { Box, Typography, Link} from "@mui/material"
import Image from "next/image"

export const AboutHaidoc = ()=>{
    return <Box display={'grid'} paddingInline={{xs: '1rem', md: '3rem',lg:'6rem'}} flexBasis={{
        xs: 0,
        lg: '50%'
      }} sx={{
        '& img':{
          maxHeight: '52rem',
          maxWidth: '600px'
        },
        '& .blue-divider':{
          height: '4px',
          backgroundColor:'#48CED5',
          margin: '1rem 0',
          borderRadius: '50%',
        },
        '& .gray-divider':{
          height: '4px',
          backgroundColor:'#c4c4c4',
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
            <Box bgcolor={'#F4FEFF'} display={'flex'} flexDirection={'column'} gap={'4rem'}>
                <Box display={'flex'} bgcolor={'#48CED5'} flexDirection={'column'} gap={'1rem'}
                sx={
                    {
                        padding: '2rem 1rem',
                        borderRadius: '20px',
                      '& > h4':{
                        fontSize: '2.9rem',
                      },
                      '& > a':{
                        maxWidth: '50ch',
                        textDecoration: 'none',
                        fontSize: '1.5rem',
                        color: 'white',
                        textAlign: 'center'
                      },
                      '& .white-divider':{
                        height: '4px',
                        backgroundColor:'white',
                        margin: '1rem 0',
                        borderRadius: '50%',
                    }
                    }
                }>
                    <Link href={'#'} target="_blank">Sobre Haidoc</Link>
                    <div className="white-divider"></div>
                    <Link href={'#'} target="_blank">Tecnologia</Link>
                    <div className="white-divider"></div>
                    <Link href={'#'} target="_blank">Servicios</Link>
                </Box>
                <Image
                    width={400}
                    height={600}
                    alt="old lady doctor smiling with glasses"
                    src={"/about-doctor.png"}
                    />
            </Box>
            <Box>
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
            </Box>
        </Box>
    </Box>
}