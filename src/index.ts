import {AppDataSource} from './data-source'
import {User} from './entity/User'

AppDataSource.initialize()
  .then(async () => {
      const userRepository = AppDataSource.getRepository(User)
      const user = new User()
      user.age = 20
      user.name = 'intae'

      await userRepository.save(user) // 저장
      await userRepository.remove(user) // 삭제

      user.age = 25 // 수정 및 저장
      await userRepository.save(user)

      // 조회
      const findUser = await userRepository.findOneBy({
          name: 'intae'
      })
      console.log(findUser)
  })
  .catch((error) => console.log(error))
