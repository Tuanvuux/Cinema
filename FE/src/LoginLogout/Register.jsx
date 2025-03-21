import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

function Register() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Ở đây bạn sẽ gửi data đến API của bạn
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-indigo-600 py-4">
          <h2 className="text-center text-2xl font-bold text-white">Đăng Ký Tài Khoản</h2>
        </div>
        
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
              <p className="font-semibold">Đăng ký thành công!</p>
              <p>Thông tin của bạn đã được gửi đi.</p>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Đăng ký tài khoản mới
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            <div className="space-y-4">
              {/* Họ và tên */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register("fullName", { required: "Vui lòng nhập họ và tên" })}
                />
                {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register("email", { 
                    required: "Vui lòng nhập email", 
                    pattern: { 
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                      message: "Địa chỉ email không hợp lệ"
                    } 
                  })}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
              </div>

              {/* Mật khẩu */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Mật khẩu <span className="text-red-500">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register("password", { 
                    required: "Vui lòng nhập mật khẩu", 
                    minLength: { 
                      value: 8, 
                      message: "Mật khẩu phải có ít nhất 8 ký tự"
                    } 
                  })}
                />
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>}
              </div>

              {/* Ngày sinh */}
              <div>
                <label htmlFor="birthday" className="block text-sm font-medium text-gray-700">
                  Ngày sinh <span className="text-red-500">*</span>
                </label>
                <input
                  id="birthday"
                  type="date"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.birthday ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register("birthday", { required: "Vui lòng chọn ngày sinh" })}
                />
                {errors.birthday && <p className="mt-2 text-sm text-red-600">{errors.birthday.message}</p>}
              </div>

              {/* Địa chỉ */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Địa chỉ
                </label>
                <input
                  id="address"
                  type="text"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  {...register("address")}
                />
              </div>

              {/* Số điện thoại */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`mt-1 block w-full px-3 py-2 border ${errors.phone ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                  {...register("phone", { 
                    required: "Vui lòng nhập số điện thoại",
                    pattern: { 
                      value: /^[0-9]{10,11}$/, 
                      message: "Số điện thoại không hợp lệ"
                    } 
                  })}
                />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>}
              </div>

              {/* Giới tính */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Giới tính</label>
                <div className="mt-2 space-x-6 flex">
                  <div className="flex items-center">
                    <input
                      id="male"
                      type="radio"
                      value="Nam"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      {...register("gender")}
                      defaultChecked
                    />
                    <label htmlFor="male" className="ml-2 block text-sm text-gray-700">Nam</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="female"
                      type="radio"
                      value="Nữ"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      {...register("gender")}
                    />
                    <label htmlFor="female" className="ml-2 block text-sm text-gray-700">Nữ</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="other"
                      type="radio"
                      value="Khác"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      {...register("gender")}
                    />
                    <label htmlFor="other" className="ml-2 block text-sm text-gray-700">Khác</label>
                  </div>
                </div>
              </div>

              {/* Role - Hidden, mặc định là "USER" */}
              <input type="hidden" {...register("role")} value="USER" />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span className="text-gray-500">Đã có tài khoản?</span>{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Đăng nhập
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Đăng ký
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;