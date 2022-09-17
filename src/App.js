import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import LogoAksang from './assets/putih-merah.png';
import "./App.css";
import { 
  ChakraProvider,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Box,
  Heading, Text, Link, Button
 } from '@chakra-ui/react'
 import Iframe from 'react-iframe'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoIosGlobe } from "react-icons/io";
import { BsMic } from "react-icons/bs";
import { BiVideo } from "react-icons/bi";

class App extends React.Component {
  render = () => {
    return (
      <ChakraProvider>
        <Box bg='linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(71, 32, 32, 1) 100%)' width='100vw' height='100vh'>
          <div className="header">
            <div className="logo">
              <img src={LogoAksang} className='uhuy' alt='' />
            </div>
            <div className="social">
              <a href="https://instagram.com/bhumandala.agrariae" title="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/BhumandalaAgr" title="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          <div className="content">
            <div className="title-holder">
              <h1>Bhumandala Agrariae</h1>
              <p className='deskripsi' align='center'>Sebuah aksi angkatan Teknik Geodesi dan Geomatika ITB 2021 yang berisikan kegiatan sosial masyarakat dan aktivasi ruang, webinar, podcast, propaganda, dan pengembangan sistem informasi geografis yang mengangkat isu konflik agraria di Kota Bandung.</p>
              <Box mt='30px'>
                <Link href='https://www.arcgis.com/apps/instant/sidebar/index.html?appid=7e41d05499ea4cae97c0242b54f000a7'><Button leftIcon={<IoIosGlobe />} pr='20px' bg='white' color='gray.600' borderRadius='full'>WebGIS</Button></Link>
                <Link mx='20px' href='https://bit.ly/WebinarBhumandalaAgr'><Button leftIcon={<BiVideo />} pr='20px' bg='white' color='gray.600' borderRadius='full'>Webinar</Button></Link>
                <Link href='#'><Button leftIcon={<BsMic />} pr='20px' bg='white' color='gray.600' borderRadius='full'>Podcast</Button></Link>
              </Box>
            </div>
          </div>
        </Box>
        <Box 
          width='100vw' 
          height='100vh' 
          bg='linear-gradient(0deg, rgba(36, 36, 36, 1) 0%, rgba(71, 32, 32, 1) 100%)'
          display='flex'
          flexDir='column'
          alignItems='center'
          pt={12}
          px={10}
        >
          <Heading my={5} color='#e0e0e0' size='lg'>
            WebGIS Peta Konflik Agraria Kota Bandung
          </Heading>
          <Iframe url="https://www.arcgis.com/apps/instant/sidebar/index.html?appid=7e41d05499ea4cae97c0242b54f000a7"
            width="85%"
            height="700px"
            display="initial"
          />
          <Link 
            mt='10px'
            href='https://www.arcgis.com/apps/instant/sidebar/index.html?appid=7e41d05499ea4cae97c0242b54f000a7'
            isExternal
          >
            <Box color='#828282' fontStyle='italic'>View full screen</Box>
          </Link>
        </Box> 
        <Box 
          width='100vw' 
          height='auto' 
          bg='linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(87, 59, 29, 1) 100%)'
          display='flex'
          flexDir='column'
          alignItems='center'
          pt={12}
          px={10}
        >
          <Heading my={5} color='#e0e0e0' size='lg'>
            Apa yang Kami Lakukan?
          </Heading>
          <Tabs variant='soft-rounded' colorScheme='red' mt={5} mx={10} display='flex' flexDir='column' alignItems='center'>
            <TabList>
              <Tab color='#f5f5f5'>Aktivasi Ruang</Tab>
              <Tab color='#f5f5f5'>Webinar</Tab>
              <Tab color='#f5f5f5'>Podcast</Tab>
              <Tab color='#f5f5f5'>Propaganda</Tab>
            </TabList>
            <TabPanels textAlign='justify' bg='whiteAlpha.200' padding='10px' borderRadius='xl' my='20px'>
              <TabPanel color='#dedede'>
                <center>
                  <Carousel width='400px' showThumbs={false}>
                  <div>
                          <img src="https://i.ibb.co/m58whQt/DSC04047.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/1RmwfYk/DSC04031.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/f9zGP7t/DSC04038.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/Lzqc0YD/DSC04069.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/VNNxRzD/DSC04071.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/4JwFGnr/DSC03890.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/Np9Vq3R/DSC03908.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/wSsW6Rc/DSC03923.jpg" alt='' />
                      </div>
                  </Carousel>
                </center>
                <Text mt='20px'>
                Aktivasi ruang merupakan sebuah kegiatan yang dilakukan di atas tanah yang sedang disengketakan agar daerah terdampak konflik tersebut dapat tetap hidup serta dapat memberikan dukungan, baik secara moril ataupun materil kepada masyarakat terdampak sebagai upaya perpanjangan nafas perjuangan dalam mempertahankan hak-hak yang dirampas.<br /><br />
                Pilihan kegiatan dan tempat untuk dilakukannya aktivasi ruang didapatkan setelah proses pertimbangan dan survei yang panjang serta penetrasi kepada masyarakat yang dituju. Latar belakang tempat dilakukannya aktivasi ruang haruslah sejelas mungkin agar dampak dan usaha yang diberikan tetap sesuai koridor dan tidak menyalahi aturan serta menimbulkan stigma-stigma lainnya.<br /><br />
                Aktivasi ruang yang dilakukan berupa kegiatan edukasi dan kegiatan-kegiatan lainnya dengan sasaran utamanya adalah anak-anak yang terdampak menimbang bahwa jarang diadakannya wadah bagi anak-anak sebelumnya.<br /><br />
                Kegiatan aktivasi ruang akan dilaksanakan pada:<br />
                • Hari, tanggal: Sabtu, 17 Juli 2022<br />
                • Pukul: 13.30 - 17.00<br />
                • Tempat: Dago Elos<br />
                </Text>
              </TabPanel>
              <TabPanel color='#dedede'>
                <center>
                  <Carousel width='400px' showThumbs={false}>
                      <div>
                          <img src="https://i.ibb.co/HhK1tf8/Poster-Webinar.png" alt='' />
                      </div>
                  </Carousel>
                </center>
                <Text mt='20px'>
                Webinar adalah sebuah wadah pencerdasan massal mengenai konflik agraria yang ada di Kota Bandung menurut sudut pandang keilmuan Teknik Geodesi dan Geomatika.<br /><br />
                Webinar yang diadakan pada aksi angkatan kali ini bertajuk “Menilik Konflik Agraria dari Perspektif Geodesi” yang diisi oleh Dr. rer. pol. Rizqi Abdulharis, S.T, M.Sc.<br /><br />
                Kegiatan webinar akan dilaksanakan pada:<br />
                • Hari, tanggal: Sabtu, 17 Juli 2022<br />
                • Pukul: 13.30 - 16.00<br />
                • Tempat: <Link textStyle='bold' href='https://bit.ly/WebinarBhumandalaAgr'><b>Zoom</b></Link><br /><br />
                </Text>
                <Link href='https://bit.ly/WebinarBhumandalaAgr'><Button colorScheme='red'>Masuk ke Webinar</Button></Link>
              </TabPanel>
              <TabPanel color='#dedede'>
                <center>
                  <Carousel width='400px' showThumbs={false}>
                      <div>
                          <img src="https://i.ibb.co/CHyHRCP/53235.jpg" alt='' />
                      </div>
                      {/* <div>
                          <img src="https://i.ibb.co/tPrqrpP/20220916-134850.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/44pkJ56/20220916-140130.jpg" alt='' />
                      </div> */}
                  </Carousel>
                </center>
                <Text mt='20px'>
                  Sama seperti webinar, podcast adalah wadah pencerdasan massal yang dikemas secara menarik dan on-demand mengenai konflik agraria yang ada di Kota Bandung menurut sudut pandang keilmuan Teknik Geodesi dan Geomatika. Podcast kali ini diisi oleh narasumber dari dosen Teknik Geodesi dan Geomatika, yaitu Dr. Andri Hernandi, S.T, M.T.<br /><br />
                </Text>
                <Link href='#'><Button colorScheme='red'>Coming Soon</Button></Link>
              </TabPanel>
              <TabPanel color='#dedede'>
                <center>
                  <Carousel width='400px' showThumbs={false}>
                      <div>
                          <img src="https://i.ibb.co/wwBBBZP/1663339425521.png" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/tPrqrpP/20220916-134850.jpg" alt='' />
                      </div>
                      <div>
                          <img src="https://i.ibb.co/44pkJ56/20220916-140130.jpg" alt='' />
                      </div>
                  </Carousel>
                </center>
                <Text mt='20px'>
                  Propaganda merupakan merupakan serangkaian pesan dengan tujuan agar dapat mempengaruhi pendapat, pandangan, dan reaksi massa.<br /><br />
                  Propaganda dilakukan sebagai jenis komunikasi kepada civitas akademika ITB dan elemen-elemen lainnya yang ada di ITB agar dapat menarik perhatian dan kesadaran akan konflik-konflik agraria yang terjadi di Kota Bandung melalui pemilihan diksi dan pensuasanaan tertentu yang dituangkan dalam poster dan stiker yang ditempel di wilayah ITB dan sekitarnya.
                </Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box> 
      </ChakraProvider>
    );
  }
}

export default App;