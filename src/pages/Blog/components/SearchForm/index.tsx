import { Controller, useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { BlogContext } from "../../../../contexts/BlogContext";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export const SearchForm = () => {
  const { fetchBlogData, blogData } = useContext(BlogContext);

  const { register, handleSubmit, control } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchForm = ({ query }: any) => {
    fetchBlogData(query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchForm)}>
      <div>
        <p>Publicações</p>
        <span>{blogData.length} Publicações</span>
      </div>

      <Controller
        control={control}
        name="query"
        render={({ field: { onChange } }) => {
          return (
            <input
              type="text"
              placeholder="Search"
              {...register("query")}
              onChange={(e) => {
                onChange(e);
                handleSearchForm({ query: e.target.value });
              }}
            />
          );
        }}
      />
    </SearchFormContainer>
  );
};
