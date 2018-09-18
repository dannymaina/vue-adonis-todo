const InvalidAccessException = use('App/Exceptions/InvalidAccessException')
const ReasourceNotExistException = use('App/Exceptions/ReasourceNotExistException')

class AuthorizationService {
    verifyPermission(resource, user){
        if(!resource){
            throw new ReasourceNotExistException()
        }

        if(resource.user_id !== user.id){
            throw new InvalidAccessException()
        }
    }
}

module.exports = new AuthorizationService()