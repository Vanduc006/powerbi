import * as z from "zod"
export const SignUpValdition = z.object({
    fullname : z.string().min(10 ,{message:"Tối thiểu 10 kí tự"}).max(30,{message:"Số kí tự vượt mức cho phép"}),
    username: z.string().min(10 ,{message:"Tên người dùng tối thiểu 10 kí tự"}).max(30,{message:"Số kí tự vượt mức cho phép"}),
    email: z.string().email({message:"Sai định dạng email"}),
    password: z.string().min(8 ,{message:"Mật khẩu tối thiểu 8 kí tự"}),
})
