'use client';
import EnaForm from '@/app/components/Dashboard/Form/EnaForm/EnaForm';
import EnaInput from '@/app/components/Dashboard/Form/EnaInput/EnaInput';
import { useCreateServicesMutation } from '@/redux/features/serviceApi/serviceApi';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
const image_upload_token = process.env.NEXT_PUBLIC_image_upload_token;

const CreateServicePage = () => {
  const {reset } = useForm();
  const [createServices] = useCreateServicesMutation();
  const image_upload_url = `https://api.imgbb.com/1/uploadkey=${image_upload_token}`;

  const onSubmit = (data: FieldValues) => { 
    const toastId = toast.loading('Creating new Service...');

    const formData = new FormData();
    // console.log(formData);
    formData.append('image', data.photo[0]);

    fetch(image_upload_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(async (serviceResponse) => {
        if (serviceResponse.success) {
          const photoURL = serviceResponse.data.display_url;
          const createNewService = {
            ...data,
            photo: photoURL,
          };

          try {
            const res: any = await createServices(createNewService); 
            if (res.error) {
              toast.error(`Something went wrong`, {
                id: toastId,
                duration: 2000,
              });
            } else {
              toast.success('Service Created!', {
                id: toastId,
                duration: 2000,
              });
              reset();
            }
          } catch (error) {
            toast.error('Something went wrong', {
              id: toastId,
              duration: 2000,
            });
          }
        }else{
          toast.error('image upload failed', {
            id: toastId,
            duration: 2000,
          })
        }
      })
      .catch((error) => {
        toast.error('something went wrong', {
          id: toastId,
          duration: 2000,
        })
      })
  };


  const serviceSchema = z.object( {
    title: z.string({required_error:"Title required"}),
  price: z.number({required_error:"insert a positive price"}),
  feature1: z.string({required_error:"feature 1 missing"}),
  feature2: z.string({required_error:"feature 2 missing"}),
  feature3: z.string({required_error:"feature 3 missing"}),
  feature4: z.string({required_error:"feature 4 missing"}),
  feature5: z.string({required_error:"feature 5 missing"}),
  description: z.string({required_error:"description needed"}),
  photo: z.string({required_error:"please insert photo"}),
  turnAroundTime: z.string({required_error:"turn around time missing"}),
  frontendTech1: z.string({required_error:"frontEnd Tech1 missing"}),
  frontendTech2: z.string({required_error:"frontEnd Tech2 missing"}),
  frontendTech3: z.string({required_error:"frontEnd Tech3 missing"}),
  frontendTech4: z.string({required_error:"frontEnd Tech4 missing"}),
  frontendTech5: z.string({required_error:"frontEnd Tech5 missing"}),
  frontendTech6: z.string({required_error:"frontEnd Tech6 missing"}),
  backEndTech1: z.string({required_error:"backEnd Tech1 missing"}),
  backEndTech2: z.string({required_error:"backEnd Tech2 missing"}),
  backEndTech3: z.string({required_error:"backEnd Tech3 missing"}),
  backEndTech4: z.string({required_error:"backEnd Tech4 missing"}),
  backEndTech5: z.string({required_error:"backEnd Tech5 missing"}),
  backEndTech6: z.string({required_error:"backEnd Tech6 missing"}),
  database1: z.string({required_error:"database Tech1 missing"}),
  database2: z.string({required_error:"database Tech2 missing"}),
  database3: z.string({required_error:"database Tech3 missing"}),
  database4: z.string({required_error:"database Tech4 missing"}),
  database5: z.string({required_error:"database Tech5 missing"}),
  database6: z.string({required_error:"database Tech6 missing"}),
  relevantWorkSample1: z.string({required_error:"relevant sample1 needed"}),
  relevantWorkSample2: z.string({required_error:"relevant sample2 needed"}),
  relevantWorkSample3: z.string({required_error:"relevant sample3 needed"}),
  availability: z.string({required_error:"availability required"}),
  })

  return (
    <div className="col-span-3 px-4 lg:px-0">
      <h1 className="text-2xl mt-20">Create New Service</h1>
      <EnaForm onSubmit={onSubmit} resolver ={zodResolver(serviceSchema)}>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
          <EnaInput type="text" name="title" placeholder="your user id"  />
          <EnaInput type="number" name="price" placeholder="your user id"  />
          <EnaInput type="text" name="feature1" placeholder="your user id"  />
          <EnaInput type="text" name="feature2" placeholder="your user id"  />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
        <EnaInput type="text" name="feature3" placeholder="your user id"  />
          <EnaInput type="text" name="feature4" placeholder="your user id"  />
          <EnaInput type="text" name="feature5" placeholder="your user id"  />
          <EnaInput type="text" name="description" placeholder="your user id"  />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
        <EnaInput type="text" name="turnAroundTime" placeholder="your user id"  />
          <EnaInput type="text" name="frontendTech1" placeholder="your user id"  />
          <EnaInput type="text" name="frontendTech2" placeholder="your user id"  />
          <EnaInput type="text" name="frontendTech3" placeholder="your user id"  />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
        
          <EnaInput type="text" name="frontendTech4" placeholder="your user id"  />
          <EnaInput type="text" name="frontendTech5" placeholder="your user id"  />
          <EnaInput type="text" name="frontendTech6" placeholder="your user id"  />
          <EnaInput type="text" name="backEndTech1" placeholder="your user id"  />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">      
          <EnaInput type="text" name="backEndTech2" placeholder="your user id"  />
          <EnaInput type="text" name="backEndTech3" placeholder="your user id"  />
          <EnaInput type="text" name="backEndTech4" placeholder="your user id"  />
          <EnaInput type="text" name="backEndTech5" placeholder="your user id"  />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
       
          <EnaInput type="text" name="backEndTech6" placeholder="your user id"  />
          <EnaInput type="text" name="database1" placeholder="your user id"  />
          <EnaInput type="text" name="database2" placeholder="your user id"  />
          <EnaInput type="text" name="database3" placeholder="your user id"  />
          
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
         
          <EnaInput type="text" name="database4" placeholder="your user id"  />
          <EnaInput type="text" name="database5" placeholder="your user id"  />
          <EnaInput type="text" name="database6" placeholder="your user id"  />
          <EnaInput type="text" name="relevantWorkSample1" placeholder="your user id"  />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4 my-5 ">
         
 
          <EnaInput type="text" name="relevantWorkSample2" placeholder="your user id"  />
          <EnaInput type="text" name="relevantWorkSample3" placeholder="your user id"  />
          <EnaInput type="text" name="availability" placeholder="your user id"  />
          <EnaInput type="file" name="photo" placeholder="your user id"  />
 
        </div>
       

        <div className="text-center">
        <button 
        type='submit'
        className="mt-8 btn btn-wide mb-6 px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-gray-600 text-white inline-block">
              <span className="absolute bottom-0 left-0 flex w-full h-0 mt-0 transition-all duration-500 ease-out transform translate-y-0 bg-gray-200 group-hover:h-full "></span>
              <span className="relative group-hover:text-black font-bold flex items-center gap-4 justify-center">
                Create A New Service
              </span>
            </button>
        </div>
        </EnaForm>
    </div>
  );
};

export default CreateServicePage;
