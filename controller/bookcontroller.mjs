import BooksDetailsSchema from "../models/bookmodel.mjs";

const AddData = async (req, res) => {
  const Details = req.body;
  const addedDetails = await BooksDetailsSchema.create(Details);
  return res.send({
    Status: "Success 201 The Book's details added successfully",
    AddData: addedDetails,
  });
};

const ReadData = async (req, res) => {
    const AllDetails = await BooksDetailsSchema.find();
  return res.send({
    Status: "Status 200  Array of books matching the search criteria",
    AllBooksDetails: AllDetails,
  });
};
const DeleteData= async (req,res)=>{
    const DeleteDetails= await BooksDetailsSchema.findByIdAndDelete({_id:'66120e35cbab530f64014aa3'});
    return res.send({
        Status: "Status200 Book deleted successfully",
        DeleteData: DeleteDetails,
      });
}
const UpdateData = async (req,res)=>{
    const UpdateDetails=await BooksDetailsSchema.findByIdAndUpdate({_id:'6612e7f203907102cbf33307'});
    return res.send({
        Status: "Status 200 Book updated successfully",
        UpdateData: UpdateDetails,
      });
}
export { AddData, ReadData ,DeleteData,UpdateData};