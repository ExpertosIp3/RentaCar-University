import { Calendar, Car, Heart, Settings, ClipboardList } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Coches",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Reserva de coches",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Coches Favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Settings,
    label: "Administrar Coches",
    href: "dashboard/admin/cars-manager",
  },
  {
    icon: ClipboardList,
    label: "Todas las reservas",
    href: "/all-reserves",
  },
];
