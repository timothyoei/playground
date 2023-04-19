cmake_minimum_required(VERSION 3.10)

# Set the project name
project(my_project)

# Add include directories
include_directories(include)

# Add source files
file(GLOB SOURCES "src/*.cpp" "src/**/*.cpp")

# Add the executable target
add_executable(my_project ${SOURCES})