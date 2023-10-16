import { UserModel } from "@/models"

export const deleteUser = async (id: string) => {
  return await UserModel.findByIdAndDelete(id)
}
