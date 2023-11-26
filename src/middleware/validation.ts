import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import {Request, Response, NextFunction} from 'express'

const validateObject = async (schema: new () => {}, requestObject: object) => {
  const transformedClass: any = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);
  if (errors.length > 0) {
    return errors;
  }
  return true;
};

export const validationMiddleware =  (schema: new ()=>{}) =>{
    return async (req: Request, res: Response, next: NextFunction)=> {
        var isValid = await validateObject(schema, req.body)
        if(isValid == true){
            next()
            return true;
        }else{
            console.log(isValid)
            return res.status(400).json(isValid)
        }
    }
}
