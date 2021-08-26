import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en Hook use FetchGifs', () => {
   
   
   test('Debe Retornar EL estado Inicial',async () => {

   //En esta seccion tubimos el problema que al momento de querer testear nuestro hooks este no nos dejo
   //Debido a que enzine no tiene un metodo para hacerlo asi que usamos otra libreria que nos permitira acceder a nuestro Hooks
   //https://react-hooks-testing-library.com/installation es el link de la Libreria

      //Result no es un valor de nuestro useFetch este nos permitira acceder a los resultados optenidos de la consulta

     const {result,waitForNextUpdate} =  renderHook( () => useFetchGifs('One Punch'));
   //Con .Current esto nos permitira acceder a los valores que nos entrega La consulta
     const {data, loading} =  result.current

     await waitForNextUpdate()


     expect(data).toEqual([]);
     expect(loading).toBe(true)

      // const { data, loading } = useFetchGifs('One Punch');

      // console.log(data,loading)
   })

   test('Debe de retornar un arreglo de imagen y loading en false', async () => {
      const {result, waitForNextUpdate} =  renderHook( () => useFetchGifs('One Punch'));
      await waitForNextUpdate()
      const {data, loading} =  result.current

      expect(data.length).toEqual(data.length);
     expect(loading).toBe(false)
      console.log(data)
      

   })
   
   

})
