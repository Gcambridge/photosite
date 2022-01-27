import os
  
def main():
    folder = raw_input("enter the  folder name: ")
    for count, filename in enumerate(os.listdir("c:/Users/gavri/Documents/GitHub/photosite/photos/" + folder + "/")):
        dst = str(count) + ".jpg"
        src ='c:/Users/gavri/Documents/GitHub/photosite/photos/' + folder + '/' + filename
        dst ='c:/Users/gavri/Documents/GitHub/photosite/photos/' + folder + '/' + dst
          
        os.rename(src, dst)
  
if __name__ == '__main__':
    main()