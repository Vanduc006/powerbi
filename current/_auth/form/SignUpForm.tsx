import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { SignUpValdition } from "@/lib/valdition"
import { Loader2 } from "lucide-react"
import { Link } from "react-router-dom"

const SignUpForm = () => {
  let IsLoading = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignUpValdition>>({
    resolver: zodResolver(SignUpValdition),
    defaultValues: {
      username: "",
      fullname: "",
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignUpValdition>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    
  }

  return (
    <main>
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <span className="h3-bold md:h2-bold pt-5 sm:pt-12">
            <Link to="/">IMASIS</Link>
          </span>
          <span>Chào mừng bạn quay trở lại</span>
        
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-5 justify-center flex-col w-full mt-5">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ và tên</FormLabel>
                  <FormControl>
                    <Input className="text-black" placeholder="Nguyễn Văn A" {...field} title="Họ và tên"/>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên tài khoản</FormLabel>
                  <FormControl>
                    <Input className="text-black" placeholder="Ví dụ: duchandsome" {...field} title="Tên người dùng"/>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ email</FormLabel>
                  <FormControl>
                    <Input type="email" className="text-black" placeholder="Ví dụ: abc@gmail.com" {...field} title="Địa chỉ email"/>
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" className="text-black" placeholder="" {...field} title="Mật khẩu"/>
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="outline">
              {IsLoading ? (
                <div className="flex-center gap-2">
                  Loading<Loader2 className="h-4 w-4 animate-spin" />
                </div>
              ) : "Đăng nhập"}
             
            
            </Button>
            <span className="flex justify-center">
              Bạn đã có tài khoản? Hãy <Link to='/sign-in' className="ml-1 text-slate-500"> đăng nhập. </Link>
            </span>
          </form>
      </div>
    </Form>
    </main>
  )
}

export default SignUpForm