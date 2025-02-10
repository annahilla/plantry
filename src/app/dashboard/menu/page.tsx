"use client";

import Week from "@/components/menu-planner/Week";
import { useAppSelector } from "@/lib/store/reduxHooks";
import { deleteFullMenu } from "@/services/menuService";
import { useState } from "react";
import { MdOutlineCleaningServices } from "react-icons/md";
import { MenuInterface } from "@/types/types";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import PageTitle from "@/components/ui/PageTitle";

const Menu = () => {
  const token = useAppSelector((state) => state.auth.user?.token);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState<MenuInterface[]>([]);

  const handleClear = () => {
    setIsModalOpen(true);
  };

  const clearAll = () => {
    if (token) {
      deleteFullMenu(token);
      setIsModalOpen(false);
      setMenu([]);
    }
  };

  return (
    <>
      <div className="w-full flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <PageTitle>Meal Planner</PageTitle>
          <button
            onClick={handleClear}
            className="p-2 bg-neutral-50 rounded text-neutral-600 text-sm hover:bg-neutral-100"
          >
            <MdOutlineCleaningServices />
          </button>
        </div>
        <Week menu={menu} setMenu={setMenu} />
      </div>
      <DeleteConfirmationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleDelete={clearAll}
        thingToDelete="the menu"
      />
    </>
  );
};

export default Menu;
