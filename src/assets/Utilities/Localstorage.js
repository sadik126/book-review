const getwishlist = () => {
  const storedwishlist = localStorage.getItem("Wishlist");
  if (storedwishlist) {
    return JSON.parse(storedwishlist);
  }
  return [];
};

const getreadlist = () => {
  const storedreadlist = localStorage.getItem("readlist");
  if (storedreadlist) {
    return JSON.parse(storedreadlist);
  }
  return [];
};

const Savewishlist = (id) => {
  const storedreadlist = getreadlist();
  const storedallwishlist = getwishlist();
  console.log(storedallwishlist, storedreadlist);
  const exixts = storedallwishlist.find((wish) => wish === id);

  if (!exixts) {
    storedallwishlist.push(id);
    localStorage.setItem("Wishlist", JSON.stringify(storedallwishlist));
  }
};

const Savereadlist = (id) => {
  const storedallreadlist = getreadlist();
  const exixts = storedallreadlist.find((read) => read === id);
  if (!exixts) {
    storedallreadlist.push(id);
    localStorage.setItem("readlist", JSON.stringify(storedallreadlist));
  }
};

export { getwishlist, Savewishlist, getreadlist, Savereadlist };
