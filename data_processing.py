#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd


# In[2]:


data=pd.read_csv('./datas/data.csv')


# In[3]:


del data['타임스탬프']


# In[4]:


asd=[]
they=[]
with open('./datas/form.txt','r') as fp: 
    asd=fp.read().split('\n')
    
for i in  range(len(data)):
    mbti_dic={'MBTI':data.loc[i][0],'1':data.loc[i][1],'2':data.loc[i][2],'3':data.loc[i][3]}
    they.append(mbti_dic)


# In[5]:


def oneHotEncoding(lst,find_view):
    return_lst=[]
    return_lst.append(find_view.index(lst[0]))
    return_lst.append(find_view.index(lst[1]))
    return_lst.append(find_view.index(lst[2]))
    return return_lst
def List_to_3nd_List(lst):
    one=[]
    two=[]
    three=[]
    for i in lst:
        one.append(i[0])
        two.append(i[1])
        three.append(i[2])
    print([one,two,three])
    return [one,two,three]
def getRank(lst):
    return_lst=[]
    for i in range(len(lst)):
        top=0
        big=0
        top_lst=[]
        top=lst[i].count(0)
        if top<lst[i].count(1):
            top=lst[i].count(1)
            big=1
        if top<lst[i].count(2):
            top=lst[i].count(2)
            big=2
        if top==lst[i].count(0) and big!=0:
            top_lst.append(0)
        if top==lst[i].count(1) and big!=1:
            top_lst.append(1)
        if top==lst[i].count(2) and big!=2:
            top_lst.append(2)
        top_lst.append(big)
        return_lst.append({i+1:top_lst})
    return return_lst
    


# In[6]:


ISTJ=[]
ISFJ=[]
INFJ=[]
ISTP=[]
ISFP=[]
INFP=[]
INTP=[]
ESTP=[]
ESFP=[]
ENFP=[]
ENTP=[]
ESTJ=[]
ESFJ=[]
ENFJ=[]
ENTJ=[]
INTJ=[]
for i in they:
    print(i)
    if i['MBTI']=='ISTJ':
            ISTJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ISFJ':
            ISFJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='INFJ':
            INFJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ISTP':
            ISTP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ISFP':
            ISFP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='INFP':
            INFP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='INTP':
            INTP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ESTP':
            ESTP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ESFP':
            ESFP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ENFP':
            ENFP.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ESTJ':
            ESTJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ESFJ':
            ESFJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ENFJ':
            ENFJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ENTJ':
            ENTJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='INTJ':
            INTJ.append(oneHotEncoding(list(i.values())[1:],asd))
    elif i['MBTI']=='ENTP':
            ENTP.append(oneHotEncoding(list(i.values())[1:],asd))

            


# In[7]:


print(ISTJ)
print(ISFJ)
print(INFJ)
print(ISTP)
print(ISFP)
print(INFP)
print(INTP)
print(ESTP)
print(ESFP)
print(ENFP)
print(ENTP)
print(ESTJ)
print(ESFJ)
print(ENFJ)
print(ENTJ)
print(INTJ)


# In[8]:


ISTJ=List_to_3nd_List(ISTJ)
ISFJ=List_to_3nd_List(ISFJ)
INFJ=List_to_3nd_List(INFJ)
ISTP=List_to_3nd_List(ISTP)
ISFP=List_to_3nd_List(ISFP)
INFP=List_to_3nd_List(INFP)
INTP=List_to_3nd_List(INTP)
ESTP=List_to_3nd_List(ESTP)
ESFP=List_to_3nd_List(ESFP)
ENFP=List_to_3nd_List(ENFP)
ENTP=List_to_3nd_List(ENTP)
ESTJ=List_to_3nd_List(ESTJ)
ESFJ=List_to_3nd_List(ESFJ)
ENFJ=List_to_3nd_List(ENFJ)
ENTJ=List_to_3nd_List(ENTJ)
INTJ=List_to_3nd_List(INTJ)


# In[9]:


ENFP[0].count(2)


# In[10]:


getRank(ENTP)


# In[17]:


print('ISTJ:',getRank(ISTJ))
print('ISFJ:',getRank(ISFJ))
print('INFJ:',getRank(INFJ))
print('ISTP:',getRank(ISTP))
print('ISFP:',getRank(ISFP))
print('INFP:',getRank(INFP))
print('INTP:',getRank(INTP))
print('ESTP:',getRank(ESTP))
print('ESFP:',getRank(ESFP))
print('ENFP:',getRank(ENFP))
print('ENTP:',getRank(ENTP))
print('ESTJ:',getRank(ESTJ))
print('ESFJ:',getRank(ESFJ))
print('ENFJ:',getRank(ENFJ))
print('ENTJ:',getRank(ENTJ))
print('INTJ:',getRank(INTJ))


# In[12]:


# retrun_json={
# 'ISTJ':getRank(ISTJ),
# 'ISFJ':getRank(ISFJ),
# 'INFJ':getRank(INFJ),
# 'ISTP':getRank(ISTP),
# 'ISFP':getRank(ISFP),
# 'INFP':getRank(INFP),
# 'INTP':getRank(INTP),
# 'ESTP':getRank(ESTP),
# 'ESFP':getRank(ESFP),
# 'ENFP':getRank(ENFP),
# 'ENTP':getRank(ENTP),
# 'ESTJ':getRank(ESTJ),
# 'ESFJ':getRank(ESFJ),
# 'ENFJ':getRank(ENFJ),
# 'ENTJ':getRank(ENTJ),
# 'INTJ':getRank(INTJ),
# }

retrun_json={
    'ISTJ':ISTJ,
    'ISFJ':ISFJ,
    'INFJ':INFJ,
    'ISTP':ISTP,
    'ISFP':ISFP,
    'INFP':INFP,
    'INTP':INTP,
    'ESTP':ESTP,
    'ESFP':ESFP,
    'ENFP':ENFP,
    'ENTP':ENTP,
    'ESTJ':ESTJ,
    'ESFJ':ESFJ,
    'ENFJ':ENFJ,
    'ENTJ':ENTJ,
    'INTJ':INTJ,
    }

# In[13]:


import json


# In[14]:


with open('./datas/processing.json','w') as fp:
    json.dump(retrun_json, fp)


# In[16]:


print(getRank(ENFP))


# In[ ]:




