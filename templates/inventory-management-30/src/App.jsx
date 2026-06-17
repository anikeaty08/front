import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // --- DATA MODEL ---
    let rawMaterials = [
      {
        name: "Steel Sheet",
        sku: "ST-001",
        quantity: 80, // already deducted by product example
        unit: "pcs",
        unitPrice: 40,
        supplier: "SteelCo",
        minStock: 20,
        notes: "",
        lastUpdated: "2025-12-01 10:00"
      },
      {
        name: "Paint",
        sku: "PNT-010",
        quantity: 40,
        unit: "L",
        unitPrice: 15,
        supplier: "ColorSupplies",
        minStock: 10,
        notes: "",
        lastUpdated: "2025-12-01 10:05"
      }
    ];

    let products = [
      {
        name: "Painted Steel Panel",
        sku: "PSP-001",
        quantity: 10,
        sellingPrice: 200,
        composition: [
          { rawSku: "ST-001", qtyPerUnit: 2 },
          { rawSku: "PNT-010", qtyPerUnit: 1 }
        ],
        totalCost: 1100, // 2*40*10 + 1*15*10
        costPerUnit: 110,
        createdAt: "2025-12-01 10:10"
      }
    ];

    // --- UTILITIES ---
    function formatCurrency(value) {
      return "AED " + value.toFixed(2);
    }

    function formatDateNow() {
      const d = new Date();
      return (
        d.getFullYear() +
        "-" +
        String(d.getMonth() + 1).padStart(2, "0") +
        "-" +
        String(d.getDate()).padStart(2, "0") +
        " " +
        String(d.getHours()).padStart(2, "0") +
        ":" +
        String(d.getMinutes()).padStart(2, "0")
      );
    }

    function showToast(message) {
      const toast = document.getElementById("toast");
      const msg = document.getElementById("toastMessage");
      msg.textContent = message;
      toast.classList.remove("hidden");
      clearTimeout(window._toastTimer);
      window._toastTimer = setTimeout(() => {
        toast.classList.add("hidden");
      }, 2000);
    }

    // --- TAB SWITCHING ---
    function switchTab(tab) {
      const rawBtn = document.getElementById("tab-raw");
      const prodBtn = document.getElementById("tab-products");
      const rawPanel = document.getElementById("panel-raw");
      const prodPanel = document.getElementById("panel-products");

      if (tab === "raw") {
        rawBtn.dataset.active = "true";
        prodBtn.dataset.active = "false";
        rawPanel.classList.remove("hidden");
        prodPanel.classList.add("hidden");
      } else {
        rawBtn.dataset.active = "false";
        prodBtn.dataset.active = "true";
        rawPanel.classList.add("hidden");
        prodPanel.classList.remove("hidden");
      }
    }

    // --- RAW MATERIALS TABLE ---
    function renderRawTable() {
      const body = document.getElementById("rawTableBody");
      const query = (document.getElementById("rawSearch").value || "").toLowerCase().trim();
      body.innerHTML = "";

      rawMaterials
        .filter((m) => {
          if (!query) return true;
          return (
            m.name.toLowerCase().includes(query) ||
            m.sku.toLowerCase().includes(query) ||
            (m.supplier || "").toLowerCase().includes(query)
          );
        })
        .forEach((m, index) => {
          const lowStock = m.minStock != null && m.minStock !== "" && Number(m.quantity) < Number(m.minStock);
          const row = document.createElement("div");
          row.className =
            "group grid grid-cols-12 gap-3 px-4 py-3 hover:bg-slate-900/60 transition";

          row.innerHTML = `
            <div class="col-span-3 flex flex-col">
              <span class="text-sm font-medium ${
                lowStock ? "text-rose-300" : "text-slate-100"
              }">${m.name}</span>
              <span class="text-xs text-slate-500">${m.sku}</span>
            </div>
            <div class="col-span-1 text-right flex items-center justify-end gap-1">
              <span class="text-sm ${lowStock ? "text-rose-300 font-medium" : "text-slate-100"}">${
            m.quantity
          }</span>
              ${
                lowStock
                  ? `<span class="relative group/tooltip">
                      <span class="inline-flex h-1.5 w-1.5 rounded-full bg-rose-500"></span>
                      <span class="pointer-events-none absolute -top-8 right-0 hidden w-max rounded-md bg-slate-900 px-2 py-1 text-[0.7rem] text-rose-100 border border-rose-500/40 group-hover/tooltip:block">
                        Low stock: refill soon
                      </span>
                    </span>`
                  : ""
              }
            </div>
            <div class="col-span-1 flex items-center">
              <span class="text-xs text-slate-300">${m.unit || "-"}</span>
            </div>
            <div class="col-span-1 text-right">
              <span class="text-sm text-slate-100">${formatCurrency(Number(m.unitPrice) || 0)}</span>
            </div>
            <div class="col-span-2 flex flex-col">
              <span class="text-sm text-slate-100">${m.supplier || "-"}</span>
              ${
                m.minStock
                  ? `<span class="text-[0.7rem] text-slate-500">Min: ${m.minStock} ${m.unit || ""}</span>`
                  : ""
              }
            </div>
            <div class="col-span-2 flex items-center">
              <span class="text-xs text-slate-400">${m.lastUpdated || "-"}</span>
            </div>
            <div class="col-span-2 flex items-center justify-end gap-2">
              <button
                class="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800/90 transition"
                onclick="startRawInlineEdit(${index})"
              >
                <span class="iconify" data-icon="lucide:pencil" data-width="14" data-height="14" style="stroke-width:1.5"></span>
                Edit
              </button>
              <button
                class="inline-flex items-center gap-1 rounded-full border border-rose-700/70 bg-rose-900/40 px-3 py-1.5 text-xs text-rose-100 hover:bg-rose-900/70 transition"
                onclick="deleteRaw(${index})"
              >
                <span class="iconify" data-icon="lucide:trash-2" data-width="14" data-height="14" style="stroke-width:1.5"></span>
                Delete
              </button>
            </div>
          `;
          body.appendChild(row);
        });

      if (!body.children.length) {
        const empty = document.createElement("div");
        empty.className = "px-4 py-8 text-center text-sm text-slate-500";
        empty.textContent = "No raw materials match this filter.";
        body.appendChild(empty);
      }

      renderProductsTable(); // keep products cost in sync if stock changed
    }

    function startRawInlineEdit(index) {
      const material = rawMaterials[index];
      openRawModal(material, index);
    }

    function deleteRaw(index) {
      if (!confirm("Delete this raw material?")) return;
      rawMaterials.splice(index, 1);
      renderRawTable();
      renderProductsTable();
      showToast("Raw material deleted");
    }

    // --- RAW MODAL ---
    function openRawModal(material = null, index = null) {
      document.getElementById("rawModal").classList.remove("hidden");
      document.getElementById("rawModal").classList.add("flex");
      document.getElementById("rawEditIndex").value = index != null ? index : "";
      document.getElementById("rawModalTitle").textContent = index != null ? "Edit Raw Material" : "Add Raw Material";

      if (material) {
        document.getElementById("rawName").value = material.name || "";
        document.getElementById("rawSku").value = material.sku || "";
        document.getElementById("rawQuantity").value = material.quantity;
        document.getElementById("rawUnit").value = material.unit || "";
        document.getElementById("rawUnitPrice").value = material.unitPrice;
        document.getElementById("rawSupplier").value = material.supplier || "";
        document.getElementById("rawMinStock").value = material.minStock ?? "";
        document.getElementById("rawNotes").value = material.notes || "";
      } else {
        document.getElementById("rawName").value = "";
        document.getElementById("rawSku").value = "";
        document.getElementById("rawQuantity").value = "";
        document.getElementById("rawUnit").value = "";
        document.getElementById("rawUnitPrice").value = "";
        document.getElementById("rawSupplier").value = "";
        document.getElementById("rawMinStock").value = "";
        document.getElementById("rawNotes").value = "";
      }
    }

    function closeRawModal() {
      document.getElementById("rawModal").classList.add("hidden");
      document.getElementById("rawModal").classList.remove("flex");
    }

    function submitRawForm(e) {
      e.preventDefault();
      const idxStr = document.getElementById("rawEditIndex").value;
      const data = {
        name: document.getElementById("rawName").value.trim(),
        sku: document.getElementById("rawSku").value.trim(),
        quantity: Number(document.getElementById("rawQuantity").value) || 0,
        unit: document.getElementById("rawUnit").value.trim(),
        unitPrice: Number(document.getElementById("rawUnitPrice").value) || 0,
        supplier: document.getElementById("rawSupplier").value.trim(),
        minStock: document.getElementById("rawMinStock").value
          ? Number(document.getElementById("rawMinStock").value)
          : null,
        notes: document.getElementById("rawNotes").value.trim(),
        lastUpdated: formatDateNow()
      };

      if (idxStr !== "") {
        rawMaterials[Number(idxStr)] = data;
        showToast("Raw material updated");
      } else {
        rawMaterials.push(data);
        showToast("Raw material added");
      }

      closeRawModal();
      renderRawTable();
    }

    // --- PRODUCTS TABLE ---
    function renderProductsTable() {
      const body = document.getElementById("productsTableBody");
      const query = (document.getElementById("productSearch").value || "").toLowerCase().trim();
      body.innerHTML = "";

      products
        .filter((p) => {
          if (!query) return true;
          return (
            p.name.toLowerCase().includes(query) ||
            p.sku.toLowerCase().includes(query)
          );
        })
        .forEach((p, index) => {
          // ensure cost recalculation from current raw prices
          const { totalCost, costPerUnit } = recalcProductCost(p);
          p.totalCost = totalCost;
          p.costPerUnit = costPerUnit;

          const compText = p.composition
            .map((c) => {
              const raw = rawMaterials.find((m) => m.sku === c.rawSku);
              return raw ? `${c.qtyPerUnit} × ${raw.name}` : "";
            })
            .filter(Boolean)
            .join(", ");

          const row = document.createElement("div");
          row.className =
            "group grid grid-cols-12 gap-3 px-4 py-3 hover:bg-slate-900/60 transition";

          row.innerHTML = `
            <div class="col-span-3 flex flex-col">
              <span class="text-sm font-medium text-slate-100">${p.name}</span>
              <span class="text-xs text-slate-500">${p.sku}</span>
            </div>
            <div class="col-span-2 text-right">
              <span class="text-sm text-slate-100">${p.quantity}</span>
            </div>
            <div class="col-span-2 text-right">
              <span class="text-sm text-slate-100">${formatCurrency(p.costPerUnit || 0)}</span>
            </div>
            <div class="col-span-2 text-right">
              <span class="text-sm text-slate-100">${formatCurrency(p.sellingPrice || 0)}</span>
            </div>
            <div class="col-span-2 flex flex-col">
              <span class="text-xs text-slate-300">${compText || "-"}</span>
            </div>
            <div class="col-span-1 flex items-center justify-end gap-2">
              <button
                class="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-slate-800/90 transition"
                onclick="openProductModal(${index})"
              >
                <span class="iconify" data-icon="lucide:pencil" data-width="14" data-height="14" style="stroke-width:1.5"></span>
              </button>
              <button
                class="inline-flex items-center gap-1 rounded-full border border-rose-700/70 bg-rose-900/40 px-2.5 py-1.5 text-xs text-rose-100 hover:bg-rose-900/70 transition"
                onclick="deleteProduct(${index})"
              >
                <span class="iconify" data-icon="lucide:trash-2" data-width="14" data-height="14" style="stroke-width:1.5"></span>
              </button>
            </div>
          `;
          body.appendChild(row);
        });

      if (!body.children.length) {
        const empty = document.createElement("div");
        empty.className = "px-4 py-8 text-center text-sm text-slate-500";
        empty.textContent = "No products match this filter.";
        body.appendChild(empty);
      }
    }

    function recalcProductCost(product) {
      let totalCost = 0;
      product.composition.forEach((c) => {
        const raw = rawMaterials.find((m) => m.sku === c.rawSku);
        if (!raw) return;
        totalCost += raw.unitPrice * c.qtyPerUnit * product.quantity;
      });
      const costPerUnit = product.quantity ? totalCost / product.quantity : 0;
      return { totalCost, costPerUnit };
    }

    function deleteProduct(index) {
      if (!confirm("Delete this product? (Stock already deducted will not be restored in this prototype)")) return;
      products.splice(index, 1);
      renderProductsTable();
      showToast("Product deleted");
    }

    // --- PRODUCT MODAL & COMPOSITION ---
    let compositionRows = [];

    function openProductModal(index = null) {
      document.getElementById("productModal").classList.remove("hidden");
      document.getElementById("productModal").classList.add("flex");
      document.getElementById("productEditIndex").value = index != null ? index : "";
      document.getElementById("insufficientWarning").classList.add("hidden");
      document.getElementById("overrideInsufficient").checked = false;
      compositionRows = [];

      if (index != null) {
        const p = products[index];
        document.getElementById("productModalTitle").textContent = "Edit Product";
        document.getElementById("productName").value = p.name;
        document.getElementById("productSku").value = p.sku;
        document.getElementById("productQuantity").value = p.quantity;
        document.getElementById("productSellingPrice").value = p.sellingPrice;
        compositionRows = p.composition.map((c) => ({
          rawSku: c.rawSku,
          qtyPerUnit: c.qtyPerUnit
        }));
      } else {
        document.getElementById("productModalTitle").textContent = "Add Product";
        document.getElementById("productName").value = "Painted Steel Panel";
        document.getElementById("productSku").value = "PSP-001";
        document.getElementById("productQuantity").value = 10;
        document.getElementById("productSellingPrice").value = 200;
        // default composition as per example
        compositionRows = [
          { rawSku: "ST-001", qtyPerUnit: 2 },
          { rawSku: "PNT-010", qtyPerUnit: 1 }
        ];
      }

      renderCompositionRows();
      updateProductCostSummary();
    }

    function closeProductModal() {
      document.getElementById("productModal").classList.add("hidden");
      document.getElementById("productModal").classList.remove("flex");
    }

    function addCompositionRow() {
      compositionRows.push({ rawSku: rawMaterials[0]?.sku || "", qtyPerUnit: 1 });
      renderCompositionRows();
      updateProductCostSummary();
    }

    function removeCompositionRow(idx) {
      compositionRows.splice(idx, 1);
      renderCompositionRows();
      updateProductCostSummary();
    }

    function onCompositionChange(idx, field, value) {
      if (field === "rawSku") {
        compositionRows[idx].rawSku = value;
      } else if (field === "qtyPerUnit") {
        compositionRows[idx].qtyPerUnit = Number(value) || 0;
      }
      updateProductCostSummary();
    }

    function renderCompositionRows() {
      const body = document.getElementById("compositionBody");
      body.innerHTML = "";

      if (!compositionRows.length) {
        const empty = document.createElement("div");
        empty.className = "px-3 py-3 text-center text-xs text-slate-500";
        empty.textContent = "Add materials to define this product's composition.";
        body.appendChild(empty);
        return;
      }

      compositionRows.forEach((row, idx) => {
        const raw = rawMaterials.find((m) => m.sku === row.rawSku) || rawMaterials[0] || null;
        if (!raw && rawMaterials.length) {
          row.rawSku = rawMaterials[0].sku;
        }
        const quantity = Number(row.qtyPerUnit) || 0;
        const productQty = Number(document.getElementById("productQuantity").value) || 0;
        const required = quantity * productQty;
        const available = raw ? raw.quantity : 0;
        const cost = raw ? raw.unitPrice * required : 0;
        const insufficient = required > available;

        const div = document.createElement("div");
        div.className =
          "grid grid-cols-12 gap-2 px-3 py-2 items-center";

        div.innerHTML = `
          <div class="col-span-4">
            <select
              class="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-2 py-1.5 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500/60 focus:border-sky-500/60"
              onchange="onCompositionChange(${idx}, 'rawSku', this.value)"
            >
              ${rawMaterials
                .map(
                  (m) =>
                    `<option value="${m.sku}" ${
                      m.sku === row.rawSku ? "selected" : ""
                    }>${m.name} (${m.sku})</option>`
                )
                .join("")}
            </select>
          </div>
          <div class="col-span-2 text-right">
            <input
              type="number"
              min="0"
              step="any"
              value="${quantity || ""}"
              class="w-full rounded-lg border ${
                insufficient ? "border-rose-500/80" : "border-slate-700"
              } bg-slate-900/80 px-2 py-1.5 text-xs text-slate-100 focus:outline-none focus:ring-1 ${
          insufficient ? "focus:ring-rose-500/80" : "focus:ring-sky-500/60"
        }"
              placeholder="Qty"
              onchange="onCompositionChange(${idx}, 'qtyPerUnit', this.value)"
            />
          </div>
          <div class="col-span-2 text-right">
            <div class="flex flex-col items-end">
              <span class="text-xs ${
                insufficient ? "text-rose-300" : "text-slate-100"
              }">${available} ${raw ? raw.unit : ""}</span>
              <span class="text-[0.7rem] text-slate-500">Need ${required || 0}</span>
            </div>
          </div>
          <div class="col-span-2 text-right">
            <span class="text-xs text-slate-100">${formatCurrency(cost || 0)}</span>
          </div>
          <div class="col-span-2 text-right">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 p-1.5 text-slate-300 hover:bg-slate-800/90 transition"
              onclick="removeCompositionRow(${idx})"
            >
              <span class="iconify" data-icon="lucide:x" data-width="14" data-height="14" style="stroke-width:1.5"></span>
            </button>
          </div>
        `;
        body.appendChild(div);
      });
    }

    function updateProductCostSummary() {
      const qty = Number(document.getElementById("productQuantity").value) || 0;
      const sellingPrice = Number(document.getElementById("productSellingPrice").value) || 0;
      const override = document.getElementById("overrideInsufficient").checked;
      let totalCost = 0;
      let hasInsufficient = false;
      let firstInsufficientMessage = "";

      compositionRows.forEach((row) => {
        const raw = rawMaterials.find((m) => m.sku === row.rawSku);
        if (!raw) return;
        const qtyPerUnit = Number(row.qtyPerUnit) || 0;
        const required = qtyPerUnit * qty;
        const available = raw.quantity;
        totalCost += raw.unitPrice * required;
        if (required > available && !hasInsufficient) {
          hasInsufficient = true;
          firstInsufficientMessage = `Insufficient ${raw.name} to create ${qty} units`;
        }
      });

      const costPerUnit = qty ? totalCost / qty : 0;
      const marginPerUnit = sellingPrice - costPerUnit;

      document.getElementById("summaryTotalCost").textContent = formatCurrency(totalCost);
      document.getElementById("summaryCostPerUnit").textContent = formatCurrency(costPerUnit);
      document.getElementById("summaryMargin").textContent = formatCurrency(marginPerUnit);

      const warning = document.getElementById("insufficientWarning");
      const saveBtn = document.getElementById("productSaveButton");

      if (hasInsufficient && !override) {
        warning.classList.remove("hidden");
        warning.textContent = `Warning: “${firstInsufficientMessage}”`;
        saveBtn.disabled = true;
        saveBtn.classList.add("opacity-60", "cursor-not-allowed");
      } else {
        warning.classList.toggle("hidden", !hasInsufficient);
        if (hasInsufficient) {
          warning.textContent = `Warning: “${firstInsufficientMessage}”`;
        }
        saveBtn.disabled = false;
        saveBtn.classList.remove("opacity-60", "cursor-not-allowed");
      }

      renderCompositionRows(); // to refresh per-row insufficient styles
    }

    function submitProductForm(e) {
      e.preventDefault();
      const idxStr = document.getElementById("productEditIndex").value;
      const quantity = Number(document.getElementById("productQuantity").value) || 0;
      const name = document.getElementById("productName").value.trim();
      const sku = document.getElementById("productSku").value.trim();
      const sellingPrice = Number(document.getElementById("productSellingPrice").value) || 0;
      const override = document.getElementById("overrideInsufficient").checked;

      // Compute cost and check stock
      let totalCost = 0;
      let insufficientMaterials = [];
      compositionRows.forEach((row) => {
        const raw = rawMaterials.find((m) => m.sku === row.rawSku);
        if (!raw) return;
        const qtyPerUnit = Number(row.qtyPerUnit) || 0;
        const required = qtyPerUnit * quantity;
        totalCost += raw.unitPrice * required;
        if (required > raw.quantity) {
          insufficientMaterials.push({
            name: raw.name,
            required,
            available: raw.quantity
          });
        }
      });

      if (insufficientMaterials.length && !override) {
        const first = insufficientMaterials[0];
        alert(
          `Insufficient stock: ${first.name}. Required ${first.required}, available ${first.available}. Enable override to proceed.`
        );
        return;
      }

      const costPerUnit = quantity ? totalCost / quantity : 0;

      // Deduct stock if new record
      if (idxStr === "") {
        compositionRows.forEach((row) => {
          const raw = rawMaterials.find((m) => m.sku === row.rawSku);
          if (!raw) return;
          const qtyPerUnit = Number(row.qtyPerUnit) || 0;
          const required = qtyPerUnit * quantity;
          raw.quantity = Math.max(0, raw.quantity - required);
          raw.lastUpdated = formatDateNow();
        });
      }

      const productData = {
        name,
        sku,
        quantity,
        sellingPrice,
        composition: compositionRows.map((r) => ({
          rawSku: r.rawSku,
          qtyPerUnit: Number(r.qtyPerUnit) || 0
        })),
        totalCost,
        costPerUnit,
        createdAt: formatDateNow()
      };

      if (idxStr !== "") {
        products[Number(idxStr)] = productData;
        showToast("Product updated");
      } else {
        products.push(productData);
        showToast("Product created & stock deducted");
      }

      closeProductModal();
      renderRawTable();
      renderProductsTable();
    }

    // --- EXPORT & PDF PREVIEW (DEMO) ---
    function exportCSV() {
      const rows = [];
      rows.push([
        "Type",
        "Name",
        "SKU",
        "Quantity",
        "Unit",
        "UnitPrice",
        "Supplier",
        "MinStock",
        "Notes"
      ]);
      rawMaterials.forEach((m) => {
        rows.push([
          "RawMaterial",
          m.name,
          m.sku,
          m.quantity,
          m.unit,
          m.unitPrice,
          m.supplier,
          m.minStock,
          m.notes
        ]);
      });
      rows.push([""]);
      rows.push([
        "Type",
        "ProductName",
        "SKU",
        "Quantity",
        "SellingPrice",
        "TotalCost",
        "CostPerUnit",
        "Composition"
      ]);
      products.forEach((p) => {
        const comp = p.composition
          .map((c) => {
            const raw = rawMaterials.find((m) => m.sku === c.rawSku);
            return raw ? `${c.qtyPerUnit}x${raw.name}` : "";
          })
          .filter(Boolean)
          .join(" + ");
        rows.push([
          "Product",
          p.name,
          p.sku,
          p.quantity,
          p.sellingPrice,
          p.totalCost,
          p.costPerUnit,
          comp
        ]);
      });

      const csvContent =
        "data:text/csv;charset=utf-8," +
        rows
          .map((r) =>
            r
              .map((v) =>
                v == null ? "" : `"${String(v).replace(/"/g, '""')}"`
              )
              .join(",")
          )
          .join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "inventory_export.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    function openPdfPreview() {
      alert("PDF Preview placeholder. In production, this would open a PDF preview of the inventory snapshot.");
    }

    // --- BACKDROP CLOSE ---
    function backdropClose(event, modalId) {
      if (event.target.id === modalId) {
        document.getElementById(modalId).classList.add("hidden");
        document.getElementById(modalId).classList.remove("flex");
      }
    }

    // --- INIT ---
    renderRawTable();
    renderProductsTable();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="w-full max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-6" id="app">

<header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
<div>
<div className="inline-flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-50">iv</span>
<span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Inventory</span>
</div>
<h1 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-50">
          Inventory Management
        </h1>
<p className="mt-1 text-base text-slate-400">
          Track raw materials and products with live cost &amp; stock calculations.
        </p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 transition" onclick="exportCSV()">
<span className="iconify" data-height="18" data-icon="lucide:file-down" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
          Export CSV
        </button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 transition" onclick="openPdfPreview()">
<span className="iconify" data-height="18" data-icon="lucide:file-text" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
          PDF Preview
        </button>
</div>
</header>

<div className="flex flex-col gap-4">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 border border-slate-800 p-1 max-w-md">
<button className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-slate-300 data-[active=true]:bg-slate-100 data-[active=true]:text-slate-900 transition" data-active="true" id="tab-raw" onclick="switchTab('raw')">
          Raw Materials
        </button>
<button className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-slate-300 data-[active=true]:bg-slate-100 data-[active=true]:text-slate-900 transition" data-active="false" id="tab-products" onclick="switchTab('products')">
          Products
        </button>
</div>
</div>

<main className="flex-1 flex flex-col gap-6">

<section className="flex flex-col gap-4" id="panel-raw">

<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
<div className="flex flex-1 items-center gap-3">
<div className="relative flex-1 max-w-md">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="w-full rounded-full border border-slate-800 bg-slate-900/80 pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawSearch" oninput="renderRawTable()" placeholder="Enter material name or SKU" type="text"/>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
<span className="inline-flex h-2 w-2 rounded-full bg-rose-500"></span>
<span>Low stock items are highlighted.</span>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-400 transition shadow-sm shadow-sky-500/30" onclick="openRawModal()">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Add Material
          </button>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 shadow-sm shadow-slate-950/60 overflow-hidden">

<div className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
<div className="grid grid-cols-12 gap-3 px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-[0.16em]">
<div className="col-span-3">Name / SKU</div>
<div className="col-span-1 text-right">Qty</div>
<div className="col-span-1">Unit</div>
<div className="col-span-1 text-right">Unit Price</div>
<div className="col-span-2">Supplier</div>
<div className="col-span-2">Last Updated</div>
<div className="col-span-2 text-right">Actions</div>
</div>
</div>
<div className="divide-y divide-slate-800 text-sm" id="rawTableBody">

</div>
</div>
</section>

<section className="hidden flex-col gap-4" id="panel-products">

<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
<div className="flex flex-1 items-center gap-3">
<div className="relative flex-1 max-w-md">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-height="16" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="w-full rounded-full border border-slate-800 bg-slate-900/80 pl-9 pr-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="productSearch" oninput="renderProductsTable()" placeholder="Search product name or SKU" type="text"/>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
<span className="iconify" data-height="14" data-icon="lucide:info" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Cost is auto-calculated from raw materials.</span>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-400 transition shadow-sm shadow-sky-500/30" onclick="openProductModal()">
<span className="iconify" data-height="18" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Add Product
          </button>
</div>

<div className="relative rounded-2xl border border-slate-800 bg-slate-950/60 shadow-sm shadow-slate-950/60 overflow-hidden">

<div className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
<div className="grid grid-cols-12 gap-3 px-4 py-3 text-xs font-medium text-slate-400 uppercase tracking-[0.16em]">
<div className="col-span-3">Product / SKU</div>
<div className="col-span-2 text-right">Qty in Stock</div>
<div className="col-span-2 text-right">Cost Price</div>
<div className="col-span-2 text-right">Selling Price</div>
<div className="col-span-2">Composition</div>
<div className="col-span-1 text-right">Actions</div>
</div>
</div>
<div className="divide-y divide-slate-800 text-sm" id="productsTableBody">

</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-slate-950/70 backdrop-blur" id="rawModal" onclick="backdropClose(event, 'rawModal')">
<div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-950/80" onclick="event.stopPropagation()">
<div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50" id="rawModalTitle">
              Add Raw Material
            </h2>
<p className="mt-1 text-sm text-slate-400">
              Maintain accurate stock levels with minimum stock alerts.
            </p>
</div>
<button className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition" onclick="closeRawModal()">
<span className="iconify" data-height="18" data-icon="lucide:x" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<form className="px-5 py-4 flex flex-col gap-4" onsubmit="submitRawForm(event)">
<input id="rawEditIndex" type="hidden"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Name</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawName" placeholder="Steel Sheet" required=""/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">SKU</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawSku" placeholder="ST-001" required=""/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Quantity</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawQuantity" min="0" placeholder="100" required="" step="any" type="number"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Unit</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawUnit" placeholder="pcs / L / kg" required=""/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Unit Price (AED)</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawUnitPrice" min="0" placeholder="40" required="" step="any" type="number"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Supplier</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawSupplier" placeholder="SteelCo"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="flex items-center justify-between text-xs font-medium text-slate-300">
<span>Minimum Stock</span>
<span className="text-[0.7rem] font-normal text-slate-500">Low stock highlighted in red</span>
</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-rose-500/60 focus:border-rose-500/60" id="rawMinStock" min="0" placeholder="20" step="any" type="number"/>
</div>
<div className="flex flex-col gap-1.5 md:col-span-2">
<label className="text-xs font-medium text-slate-300">Notes</label>
<textarea className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="rawNotes" placeholder="Any handling or quality notes." rows="2"></textarea>
</div>
</div>
<div className="mt-2 flex items-center justify-between gap-3">
<div className="flex items-center gap-1 text-xs text-slate-500">
<span className="iconify" data-height="14" data-icon="lucide:bell" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Tooltip: “Low stock: refill soon”</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/90 transition" onclick="closeRawModal()" type="button">
                Cancel
              </button>
<button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-400 transition" type="submit">
                Save
              </button>
</div>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-slate-950/70 backdrop-blur" id="productModal" onclick="backdropClose(event, 'productModal')">
<div className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-950 shadow-lg shadow-slate-950/80" onclick="event.stopPropagation()">
<div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-50" id="productModalTitle">
              Add Product
            </h2>
<p className="mt-1 text-sm text-slate-400">
              Select raw materials, define composition, and auto-calculate cost.
            </p>
</div>
<button className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition" onclick="closeProductModal()">
<span className="iconify" data-height="18" data-icon="lucide:x" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<form className="px-5 py-4 flex flex-col gap-4" onsubmit="submitProductForm(event)">
<input id="productEditIndex" type="hidden"/>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="flex flex-col gap-3 lg:col-span-1">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Product Name</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="productName" placeholder="Painted Steel Panel" required=""/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">SKU</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="productSku" placeholder="PSP-001" required=""/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Quantity to Create</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="productQuantity" min="1" oninput="updateProductCostSummary()" required="" step="1" type="number" value="10"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-300">Selling Price per Unit (AED)</label>
<input className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/60 focus:border-sky-500/60" id="productSellingPrice" min="0" oninput="updateProductCostSummary()" required="" step="any" type="number" value="200"/>
</div>
<div className="flex items-center justify-between gap-2 rounded-lg border border-amber-500/40 bg-amber-500/5 px-3 py-2">
<div className="flex items-center gap-2">
<span className="iconify text-amber-400" data-height="16" data-icon="lucide:alert-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
<p className="text-xs text-amber-200">
                    Optional override: manually confirm even if low stock.
                  </p>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" id="overrideInsufficient" onchange="updateProductCostSummary()" type="checkbox"/>
<span className="h-4 w-7 rounded-full bg-slate-700 after:absolute after:left-0.5 after:top-0.5 after:h-3 after:w-3 after:rounded-full after:bg-slate-300 after:transition-all peer-checked:bg-sky-500 peer-checked:after:translate-x-3"></span>
</label>
</div>
</div>

<div className="flex flex-col gap-3 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-200">Raw Material Composition</h3>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800/90 transition" onclick="addCompositionRow()" type="button">
<span className="iconify" data-height="14" data-icon="lucide:plus" data-width="14" style={{strokeWidth: '1.5'}}></span>
                  Add Material
                </button>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/70">
<div className="grid grid-cols-12 gap-2 border-b border-slate-800 px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
<div className="col-span-4">Material</div>
<div className="col-span-2 text-right">Qty / Unit</div>
<div className="col-span-2 text-right">Available</div>
<div className="col-span-2 text-right">Cost</div>
<div className="col-span-2 text-right">Remove</div>
</div>
<div className="divide-y divide-slate-800 text-xs" id="compositionBody">

</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<div className="flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
<span>Total Cost</span>
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:calculator" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-1 text-base font-medium text-slate-100" id="summaryTotalCost">
                    AED 0.00
                  </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<div className="flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
<span>Cost per Unit</span>
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:divide" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-1 text-base font-medium text-slate-100" id="summaryCostPerUnit">
                    AED 0.00
                  </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2">
<div className="flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.16em] text-slate-400">
<span>Margin per Unit</span>
<span className="iconify text-slate-500" data-height="14" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="mt-1 text-base font-medium text-slate-100" id="summaryMargin">
                    AED 0.00
                  </p>
</div>
</div>

<div className="hidden rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-100" id="insufficientWarning">
                Warning: “Insufficient Steel Sheets to create 10 units of Painted Steel Panel”
              </div>
</div>
</div>
<div className="mt-2 flex items-center justify-between gap-3">
<div className="flex items-center gap-1 text-xs text-slate-500">
<span className="iconify" data-height="14" data-icon="lucide:info" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Stock is deducted from raw materials when you create this product.</span>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/90 transition" onclick="closeProductModal()" type="button">
                Cancel
              </button>
<button className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-400 transition" id="productSaveButton" type="submit">
                Save &amp; Deduct Stock
              </button>
</div>
</div>
</form>
</div>
</div>

<div className="pointer-events-none fixed bottom-4 right-4 z-50 hidden" id="toast">
<div className="flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-100 shadow-lg shadow-emerald-500/20">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:check-circle-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span id="toastMessage">Saved</span>
</div>
</div>
</div>


    </>
  );
}
