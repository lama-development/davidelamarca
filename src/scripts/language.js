document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("lang-menu-button");
  const dropdown = document.getElementById("lang-dropdown");
  const chevron = document.getElementById("lang-chevron-icon");
  const items = dropdown ? dropdown.querySelectorAll("[role='menuitem']") : [];
  if (!(btn && dropdown && chevron)) return;

  let focusIndex = -1;
  const setChevron = (deg) => (chevron.style.transform = `rotate(${deg}deg)`);
  const expanded = () => btn.getAttribute("aria-expanded") === "true";

  function open(first = true) {
    btn.setAttribute("aria-expanded", "true");
    dropdown.classList.remove("hidden");
    focusIndex = -1;
    setChevron(180);
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (first && items.length && !isCoarse) {
      setTimeout(() => {
        focusIndex = 0;
        items[0].focus();
      }, 40);
    }
  }
  function close(returnFocus = true) {
    btn.setAttribute("aria-expanded", "false");
    dropdown.classList.add("hidden");
    focusIndex = -1;
    setChevron(0);
    if (returnFocus) btn.focus();
  }

  function move(dir) {
    if (!items.length) return;
    focusIndex = dir === "down" ? (focusIndex + 1) % items.length : focusIndex <= 0 ? items.length - 1 : focusIndex - 1;
    items[focusIndex].focus();
  }

  btn.addEventListener("click", () => (expanded() ? close() : open()));
  btn.addEventListener("keydown", (e) => {
    if (["Enter", " ", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      open(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      open(false);
      if (!isCoarse) {
        setTimeout(() => {
          if (items.length) {
            focusIndex = items.length - 1;
            items[focusIndex].focus();
          }
        }, 40);
      }
    } else if (e.key === "Escape") close();
  });

  items.forEach((item, i) => {
    item.addEventListener("focus", () => {
      focusIndex = i;
    });
    item.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        move("down");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        move("up");
      } else if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "Tab") {
        close(false);
      }
    });
  });

  function outside(target) {
    return !btn.contains(target) && !dropdown.contains(target);
  }
  document.addEventListener("click", (e) => {
    if (expanded() && outside(e.target)) close(false);
  });
  document.addEventListener("focusin", (e) => {
    if (expanded() && outside(e.target)) close(false);
  });
});
