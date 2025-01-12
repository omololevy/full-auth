"use client";

import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";
import { List, Spinner } from "@/components/common";
import Image from "next/image";

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const avatar = user?.avatar;
  const config = [
    {
      label: "First Name",
      value: user?.first_name,
    },
    {
      label: "Last Name",
      value: user?.last_name,
    },
    {
      label: "Email",
      value: user?.email,
    },
    {
      label: "Profile Photo",
      value: user?.avatar,
    },
  ];

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <Image alt="profile pic" src="http://localhost:8000/media/uploads/avatars/WhatsApp_Image_2023-08-08_at_3.41.35_PM_1.jpeg" width={100} height={100} />
        <List config={config} />
      </main>
    </>
  );
}
