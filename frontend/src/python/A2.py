#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from flask import Flask, jsonify, render_template
import scanpy as sc
from markupsafe import escape
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Attempt to load the dataset
try:
    adata = sc.read_h5ad('pbmc3k_processed.h5ad')
    umap_data = adata.obsm['X_umap']
    umap_df = pd.DataFrame(umap_data, columns=['UMAP1', 'UMAP2'])
    data_loaded = True
except FileNotFoundError:
    print("The specified file was not found. Please check the file path.")
    data_loaded = False

@app.route('/')
def home():
    if not data_loaded:
        return jsonify({"error": "Data file not loaded. Please check the server logs."}), 500
    return jsonify(umap_df.to_dict(orient='records'))

if __name__ == '__main__':
    app.run(port=8080)

