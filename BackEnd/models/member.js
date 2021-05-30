function Member(memberID=0, fName, sName, hCap=0, memAddress, city, eircode, email){

    this.memberID = memberID;
    this.fName = fname;
    this.sName = sName;
    this.hCap = hCap;
    this.memAddress = memAddress;
    this.city = city;
    this.eircode = eircode;
    this.email = email;
}
module.exports = Member;