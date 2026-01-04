import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"



const Order = () => {


  const dataId = useParams()
  const [data, setData] = useState();
  const [Loading, setLoading] = useState(true);

  const fetchData = async () => {

    try {

      setLoading(true)
      const res = await fetch(`https://dummyjson.com/products/${dataId.product_id}`)
      const data = await res.json();
      setData(data)
      setLoading(false)
      console.log("data:", data)

    } catch (error) {
      console.log(error)
    }


  }

  useEffect(() => {
    fetchData();
    console.log("data called")
  }, []);
  if (Loading) {
    return (
      <div className="flex items-center justify-center ">
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-40 h-10  text-gray-200 animate-spin dark:text-gray-600 fill-gray-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>

    )

  } else {

    return (

      <>


        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
          <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Order summary
              </h2>
              <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Billing &amp; Delivery information
                </h4>
                <dl>
                  <dt className="text-base font-medium text-gray-900 dark:text-white">
                    Individual
                  </dt>
                  <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                    Bonnie Green - +1 234 567 890, San Francisco, California, United
                    States, 3454, Scott Street
                  </dd>
                </dl>
                <button
                  type="button"
                  data-modal-target="billingInformationModal"
                  data-modal-toggle="billingInformationModal"
                  className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
                >
                  Edit
                </button>
              </div>
              <div className="mt-6 sm:mt-8">
                <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                          <div className="flex items-center gap-4">
                            <a
                              href="#"
                              className="flex items-center aspect-square w-10 h-10 shrink-0"
                            >
                              <img
                                className="h-auto w-full max-h-full dark:hidden"
                                src={data.thumbnail}
                                alt=""
                              />
                              <img
                                className=" h-auto w-full max-h-full dark:block"
                                src={data.thumbnail}
                                alt=""
                              />
                            </a>
                            <a href="#" className="hover:underline">
                              {data.title}
                            </a>
                          </div>
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                          x1
                        </td>
                        <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                          ${data.price}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 space-y-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Order summary
                  </h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Original price
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $6,592.00
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                        <dd className="text-base font-medium text-green-500">
                          -$299.00
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">
                          Store Pickup
                        </dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $99
                        </dd>
                      </dl>
                      <dl className="flex items-center justify-between gap-4">
                        <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                          $799
                        </dd>
                      </dl>
                    </div>
                    <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt className="text-lg font-bold text-gray-900 dark:text-white">
                        Total
                      </dt>
                      <dd className="text-lg font-bold text-gray-900 dark:text-white">
                        $7,191.00
                      </dd>
                    </dl>
                  </div>
                  <div className="flex items-start sm:items-center">
                    <input
                      id="terms-checkbox-2"
                      type="checkbox"
                      defaultValue=""
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    />
                    <label
                      htmlFor="terms-checkbox-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {" "}
                      I agree with the{" "}
                      <a
                        href="#"
                        title=""
                        className="text-primary-700 underline hover:no-underline dark:text-primary-500"
                      >
                        Terms and Conditions
                      </a>{" "}
                      of use of the Flowbite marketplace{" "}
                    </label>
                  </div>
                  <div className="gap-4 sm:flex sm:items-center">
                    <Link
                      to = {`/`}
                      className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      Return to Shopping
                    </Link>
                    <button
                      type="submit"
                      className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                    >
                      Send the order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
           
      </>






    )

  }





}







export default Order 