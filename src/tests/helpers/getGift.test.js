import {getGifs} from '../../helpers/getGift'


describe('Pruebas con getGifs Fech', () => {

   test('Debe de traer 10 elementos',  async() => {

     const gifs = await getGifs('One Punch');
      expect(gifs.length).toBe(10)
   })

   test('Verificar en caso no enviar Ningun resultado', async () => {

      const gifs = await getGifs('');
      expect(gifs.length).toBe(0)
      
   })
   
   
   
})
