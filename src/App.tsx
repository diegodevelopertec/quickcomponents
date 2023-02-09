import react from 'react'
import { Botao } from './Components/Botao'
import { Container } from './Components/Container/Index'
import { Image } from './Components/Image'
import { Input } from '@chakra-ui/react'


const App=()=>{
  return <Container bg='red'd='flex' h='100vh' w='100%'  justifyContent='start' alignItem='center' >
 <div>oi</div>
  <Botao bgHover='orange' transition='all ease 0.5s' outlineHover='5px solid black' outline='12px solid blue'  onClick={()=>alert('clicou')} bd='none' justifyContent='center' h='120px' alignItems='center' radius='100%' bgColor='green' d='flex' w='120px'  p='15px 10px' text='click'/>
  <Image   w='200px' h='200px' src='https://alunos.b7web.com.br/media/courses/logo/html5-e-css3.jpg'/>
  <Input  p={'15px'} w={'680px'} bg={'green'}  type={'name'} onClick={()=>alert('clicou')} />
  </Container>
}

export default App