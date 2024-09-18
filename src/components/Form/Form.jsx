import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // 模拟提交过程
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">Username</label>
        <input
          {...register('username', { required: 'Username is required' })}
          className="border p-2"
        />
        {errors.username && <span className="text-red-500">{errors.username.message}</span>}
      </div>
      <div>
        <label className="block">Email</label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email address'
            }
          })}
          className="border p-2"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white p-2 rounded"
        disabled={isSubmitting}  // 提交时禁用按钮
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default Form;
