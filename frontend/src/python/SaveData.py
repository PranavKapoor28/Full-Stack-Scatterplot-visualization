#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import scanpy as sc

def load_and_save_dataset():
    # Load the dataset
    adata = sc.datasets.pbmc3k_processed()

    # Save the AnnData object to an .h5ad file in your current directory
    adata.write('pbmc3k_processed.h5ad')
    print("Dataset saved as 'pbmc3k_processed.h5ad'.")

if __name__ == '__main__':
    load_and_save_dataset()

